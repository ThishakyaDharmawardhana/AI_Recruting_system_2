"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useState, useEffect, useContext } from 'react'
import { UserDetailContext } from "@/context/UserDetailContext"


function Provider({ children }) {
    const [user, setUser] = useState(null)

    const createOrLoadUser = async (authUser) => {
        if (!authUser?.email) {
            setUser(null)
            return
        }

        // Always expose auth user immediately for UI
        setUser(authUser)

        const identityData = authUser.identities?.[0]?.identity_data
        const profile = {
            name:
                authUser.user_metadata?.name ||
                authUser.user_metadata?.full_name ||
                authUser.user_metadata?.preferred_username ||
                identityData?.name ||
                identityData?.full_name ||
                identityData?.given_name,
            email: authUser.email,
            picture: authUser.user_metadata?.picture || identityData?.picture,
        }

        try {
            const { data: saved } = await supabase
                .from('Users')
                .upsert(profile, { onConflict: 'email' })
                .select()
                .single()

            if (saved) {
                setUser(saved)
            }
        } catch (error) {
            if (error?.name !== 'AbortError') {
                console.error('Failed to upsert user:', error)
            }
        }
    }

    useEffect(() => {
        const loadSessionUser = async () => {
            try {
                const { data: sessionData } = await supabase.auth.getSession()
                const authUser = sessionData?.session?.user
                if (authUser) {
                    await createOrLoadUser(authUser)
                }
            } catch (error) {
                if (error?.name !== 'AbortError') {
                    console.error('Failed to load session user:', error)
                }
            }
        }

        loadSessionUser()

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                try {
                    const authUser = session?.user
                    if (authUser) {
                        await createOrLoadUser(authUser)
                    } else {
                        setUser(null)
                    }
                } catch (error) {
                    if (error?.name !== 'AbortError') {
                        console.error('Auth state change error:', error)
                    }
                }
            }
        )

        return () => {
            authListener?.subscription?.unsubscribe()
        }
    }, [])

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}

export default Provider

export const useUser = () => {
    const context = useContext(UserDetailContext)
    return context
}
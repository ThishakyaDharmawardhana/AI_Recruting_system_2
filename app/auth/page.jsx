"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'


function Login() {

  /** Use to sign in with Google */
  const signInWithGoogle = async () => {
      const { error } = await supabase.auth.signInWithOAuth({ 
        provider: 'google' 
      })

      if (error) 
      {
        console.error('Error:', error.message);
      } 
    
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image
          src={'/Logo.png'}
          alt='logo'
          width={1000}
          height={1000}
          className='w-[200px] '

        />

        <div className='flex items-center flex-col'>
          <Image src = {'/login.png'} alt='login' 
          width={600} 
          height={400}
          className='w-[400px] h-[250px] rounded-2xl'
          />

          <h2 className='text-2xl font-bold text-center mt-5'>Welcome To AIcruiter</h2>
          <p className='text-gray-500 text-center'>Sign in with google authentication</p>
          <Button className='mt-7' onClick={signInWithGoogle}
          >Login with Google</Button>

        </div>
      </div>
    </div>
  )
}

export default Login 
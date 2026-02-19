"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@/app/provider'

function WelcomeContainer() {
  const context = useUser()
  const user = context?.user
  const identityData = user?.identities?.[0]?.identity_data
  const displayName =
    user?.name ||
    user?.user_metadata?.name ||
    user?.user_metadata?.full_name ||
    identityData?.name ||
    identityData?.full_name ||
    identityData?.given_name ||
    user?.email ||
    "User"

  return (
    <div className='bg-white p-5 rounded-xl flex justify-between items-center'>
        <div>
          <h2 className='text-lg font-bold'>Welcome Back, {displayName}</h2>
          <h2 className='text-gray-500'>AI-Driven Interviews, Hassel-Free Hiring</h2>
       </div>

       {user?.picture && (
         <Image src={user.picture} alt="userAvatar" width={50} height={50}
         className='rounded-full' />
       )}
    </div>
  )
}

export default WelcomeContainer

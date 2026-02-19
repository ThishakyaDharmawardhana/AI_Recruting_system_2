import React from 'react'
import { Video, Phone } from "lucide-react";
import Link from 'next/link';

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
       <Link href="/dashboard/create-interview" className='bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 cursor-pointer'>

          <Video className='p-3 text-primary bg-orange-50 rounded-lg h-11 w-11' />
          <h2 className='font-bold'>Create New Interview</h2>
          <p className='text-gray-500'>Create AI Interview and schedule them with Candidates</p>
       </Link>

       <Link href="/dashboard/create-phone-screening" className='bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 cursor-pointer' >
          <Phone className='p-3 text-primary bg-orange-50 rounded-lg h-11 w-11' />
          <h2 className='font-bold'>Create Phone Screening Call</h2>
          <p className='text-gray-500'>Schedule phone screening calls with Candidates</p>
       </Link>
    </div>
  )
}

export default CreateOptions

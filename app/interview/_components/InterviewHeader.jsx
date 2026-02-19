import React from 'react'
import Image from 'next/image'

function InterviewHeader() {
  return (
    <div className='p-1 shadow-sm'>
      <Image src={'/Logo.png'} alt="Logo" width={200} height={100} 
            className="w-[150px] rounded-full mt-3 ml-3 bg-white"/>
    </div>
  )
}

export default InterviewHeader

import React from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'




function InterviewComplete() {
  return (
    
    <div className='flex flex-col items-center justify-center mt-1 bg-gray-100 p-10 rounded-lg border '>
        <Image src={'/check.png'} alt='check' 
        width={200} 
        height={200} 
        className="w-[50px] h-[50px]" />

        <h1 className='font-bold text-lg mt-2'>Interview Completed !</h1> 
        <p className='mt-3'>Thank you for participating in the AI-driven interview with AIcruiter</p>

        <div className='flex items-center flex-col'>
            <Image src = {'/interview.png'} alt='complete' 
                  width={600} 
                  height={400}
                  className='w-[400px] h-[250px] rounded-2xl mt-5 '
            />
        </div>

        <div className='border rounded-full mt-2 bg-white flex flex-col items-center justify-center gap-1'>
    
          <PaperAirplaneIcon className="w-8 h-8 text-orange-500 mt-2 border border-orange-700 rounded-full p-1 bg-orange-100" />
          <h2 className=' flex items-center justify-center text-xl font-semibold'>What's Next?</h2>
          
          <p className='gap-2 flex items-center justify-center text-gray-500 text-center px-5'>
            The recruiter will review your interview responses and will contact you soon regarding the next steps.
          </p>

          <p className='flex items-center justify-center gap-2 text-gray-500 text-center px-5 mb-3'>
            <Clock className="mr-2 w-4 h-4" />
            Response within 2-3 business days
          </p>

        </div>

          



        

            

     

            

    

        

        

    
    </div>
  )
}

export default InterviewComplete

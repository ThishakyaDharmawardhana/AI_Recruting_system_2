'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Copy } from 'lucide-react'
import { Clock } from 'lucide-react'
import { List } from 'lucide-react'
import { Calendar } from 'lucide-react' 
import { Mail } from 'lucide-react'
import { Plus } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function InterviewLink({interview_id, formData, questionList}) {

    console.log('InterviewLink received interview_id:', interview_id);
        const baseUrl = (process.env.NEXT_PUBLIC_HOST_URL || (typeof window !== 'undefined' ? window.location.origin : ''))
            .replace(/\/+$/, '');
        const interviewBaseUrl = baseUrl.endsWith('/interview') ? baseUrl : `${baseUrl}/interview`;
        const url=`${interviewBaseUrl}/${interview_id}`;
    const questionCount = questionList?.length || 0;
    console.log('Constructed URL:', url);

    const GetInterviewUrl=()=>{
        return url;
    }

    const onCopyLink=async()=>{
        await navigator.clipboard.writeText(url);
        toast('Link Copied')

    }


  return (
    <div className='flex flex-col items-center justify-center mt-5'>
        <Image src={'/check.png'} alt='check' 
        width={200} 
        height={200} 
        className="w-[50px] h-[50px]" />

        <h2 className='font-bold text-lg mt-4'>Your AI Interview is Ready!</h2>
        <p className='mt-3'>Share this link with your candidates to start the interview process</p>

        <div className='w-full p-7 mt-6 rounded-lg bg-white '>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold'> Interview Link</h2>
                <h2 className='p-1 px-2 text-primary text-sm rounded bg-orange-50'>Valid for 30 Days</h2>

            </div>

            <div className='mt-3 flex gap-3 items-center'>
               <Input defaultValue={GetInterviewUrl()} disabled={true} />
               <Button className='cursor-pointer'onClick={()=>onCopyLink()}> <Copy/>Copy Link</Button>
            </div>

            <hr className="my-5" />

            <div className='flex gap-5'>
                <h2 className='text-sm text-gray-500 flex items-center gap-2'><Clock className='w-4 h-4'/>  {formData?.duration}</h2>
                <h2 className='text-sm text-gray-500 flex items-center gap-2'><List className='w-4 h-4'/>  {questionCount} Questions</h2>
                {/*<h2 className='text-sm text-gray-500 flex items-center gap-2'><Calendar className='w-4 h-4'/> 30 Min {formData?.duration}</h2>*/}
            </div>

        </div>
        <div className='mt-7 bg-white p-5 rounded-lg w-full' >
            <h2 className='font-bold'>Share Via</h2>
            <div className='flex gap-7 mt-2'>
               <Button variant={'outline'} className='flex-1'> <Mail /> Slack</Button>
               <Button variant={'outline'} className='flex-1'> <Mail /> Email</Button>
               <Button variant={'outline'} className='flex-1'> <Mail /> Whatsapp</Button>
            </div>

                
        </div>

        <div className='flex gap-5 w-full justify-between mt-5' >
            <Link href="/dashboard">
              <Button variant={'outline'}> <ArrowLeft/> Back to Dashboard</Button>
            </Link>

            <Link href="/create-interview">
              <Button> <Plus/> Create New Interview </Button>
            </Link>

        </div>

    
    </div>

    
  )
}

export default InterviewLink

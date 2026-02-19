import React from 'react'
import moment from 'moment'
import { Button } from "@/components/ui/button";
import { Copy, Send, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

function InterviewCard({interview, viewDetail=false}) {
  const baseUrl = (process.env.NEXT_PUBLIC_HOST_URL || (typeof window !== 'undefined' ? window.location.origin : ''))
    .replace(/\/+$/, '');
  const interviewBaseUrl = baseUrl.endsWith('/interview') ? baseUrl : `${baseUrl}/interview`;
  const url = `${interviewBaseUrl}/${interview?.interview_id}`;

  const copyLink=()=>{
      navigator.clipboard.writeText(url);
      toast('Link Copied')
    }

    const onSend=()=>{
      window.location.href = "mailto:accounts@thishakya7376.com?subject=AiCruiter Interview Link & body=Interview Link:"+ url;
    }

  return (
    <div className='p-5 bg-white rounded-lg border'>
      <div className='flex items-center justify-between'>
        <div className='h-[20px] w-[20px] bg-primary rounded-full'></div>
        <h2 className='text-sm text-gray-600'>{moment(interview?.created_at).format("MMM Do YY")}</h2>
      </div>

      <h2 className='mt-3 font-bold text-lg'>{interview?.jobPosition}</h2>
      <h2 className='mt-2 text-sm text-gray-500 flex justify-between text-gray-500'>{interview?.duration}
        <span className='text-green-600'>{interview['interview-feedback']?.length ?? 0} Candidates</span>
      </h2>

      {!viewDetail ? <div className='flex gap-3 mt-3'>
        <Button variant="outline" className='flex-1 cursor-pointer bg-green-500 text-white hover:bg-green-800 hover:text-white' onClick={copyLink}><Copy className='w-4 h-4'/>Copy Link</Button>
        <Button className='flex-1 cursor-pointer text-white hover:bg-orange-700 hover:text-white ' onClick={onSend}><Send className='w-4 h-4 '/>Send</Button>
      </div>
      :
      <Link href={'/scheduled-interview/'+interview?.interview_id+ '/details'} className='mt-3 flex items-center justify-center gap-2 text-primary font-bold cursor-pointer' >
      <Button className=" gap-2 flex items-center justify-center cursor-pointer bg-green-500 text-white hover:bg-green-800 hover:text-white" variant='outline' >View Detail <ArrowRight className="w-4 h-4"/></Button>
      </Link>
      }
     
    </div>
  )
}

export default InterviewCard

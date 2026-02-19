'use client'
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Clock, Loader2Icon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'
import { Video } from 'lucide-react'
import {supabase} from '@/services/supabaseClient'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useRouter } from 'next/navigation'
import QuestionList from '@/app/(main)/dashboard/create-interview/_components/QuestionList'



function Interview() {

  const {interview_id}=useParams();
  console.log(interview_id)
  const [interviewData, setInterviewData]=useState();
  const[userName, setUserName]=useState('');
  const [userEmail, setUserEmail]=useState('');
  const [loading, setLoading]=useState(false);
  const {interviewInfo, setInterviewInfo}=useContext(InterviewDataContext);
  const router=useRouter();



  useEffect(()=>{
    interview_id && GetInterviewDetails();
  },[interview_id])

  const GetInterviewDetails=async ()=>{
    setLoading(true);

    try{
      let { data: Interviews, error } = await supabase
        .from('Interviews')
        .select("jobPosition,jobDescription,duration,type")
        .eq('interview_id', interview_id)
      setInterviewData(Interviews[0]);
      setLoading(false);

      if(Interviews?.length==0){
        toast('Incorrect Interview Link');

        return;
      }
  
    }
    catch(e){
      setLoading(false);
      toast('Incorrect Interview Link');
    }

  }

  const onJoininterview=async()=>{
    setLoading(true);
    let {data:Interviews, error}=await supabase
        .from('Interviews')
        .select('*')
        .eq('interview_id', interview_id)

    console.log(Interviews[0]);
    setInterviewInfo({
        userName: userName,
        userEmail: userEmail,
        interviewData:Interviews[0]
    });
    router.push('/interview/'+ interview_id +'/start');
    setLoading(false);
  }

  return (
    <div className='px-10 md:px-28 lg:px-48 lg:PX-48 xl:px-64 mt-10 '>
      <div className='flex flex-col items-center justify-center border border rounded-lg bg-white p-3 lg:px-50 xl:px-52 mb-20'>
        <Image src={'/Logo.png'} alt="Logo" width={100} height={100} 
                    className="w-[150px] rounded-full mt-1 ml-1"/>

        <h2 className='mt-2'>AI-Powered Interview Platform</h2> 

        <Image src={'/interview.png'} alt="interview" width={500} height={500} 
                    className="w-[300px] rounded-full mt-3"/>     

        <h2 className='mt-2 font-bold text-xl'>{interviewData?.jobPosition}</h2>  
        <h2 className='flex gap-2 items-center text-gray-500 mt-3'><Clock className='w-4 h-4'/>{interviewData?.duration}</h2>              

        <div className='w-full'>
            <h2>Enter your full name</h2>
            <Input placeholder='e.g Jhon Smith' className='w-full p-3 rounded-lg border border-gray-300 mt-2'
             onChange={(event)=>setUserName(event.target.value)} />
        </div>

        <div className='w-full'>
            <h2>Enter your Email</h2>
            <Input placeholder='e.g Jhon@gmail.com' className='w-full p-3 rounded-lg border border-gray-300 mt-2'
             onChange={(event)=>setUserEmail(event.target.value)} />
        </div>

        <div className='bg-orange-100 flex gap-1 p-3 rounded-lg mt-4'>
            <Info className='text-primary w-5 h-5'/>

            <div>
                <h2 className='text-lg font-bold'>Before you begin</h2>
                <ul className='list-disc pl-5'>
                  <li className='text-sm text-primary'>Make sure your camera and microphone are working properly</li>
                  <li className='text-sm text-primary'>Find a quiet place for your interview</li>
                  <li className='text-sm text-primary'>Ensure you have a stable internet connection</li>
                </ul>
            </div>

        </div>
        <Button className={'mt-4 w-full font-bold cursor-pointer'}
        disabled={loading ||!userName}
         onClick={()=>onJoininterview()}
         > 
            <Video/> {loading && <Loader2Icon className="animate-spin"/>}Start Interview</Button>
      </div>
    </div>
  )
}

export default Interview

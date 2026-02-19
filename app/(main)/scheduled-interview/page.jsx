"use client"
import React, { useEffect } from 'react'
import { useUser } from "@/app/provider";
import { supabase } from "@/services/supabaseClient";
import { useState } from 'react';
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterviewCard from '../dashboard/_components/interviewCard';


function SheduledInterview() {

  const {user} = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(()=>{
    user && GetInterviewList();
  }, [user])

  const GetInterviewList=async ()=>{
    const result=await supabase.from('Interviews')
       .select('jobPosition, duration, interview_id, created_at, interview-feedback(userEmail)')
       .eq('userEmail', user?.email)
       .order('id', { ascending: false })

    console.log(result);
    if(result.data) {
      setInterviewList(result.data);
    }
  }


  return (
    <div className='my-5'>
        <h2 className='font-bold text-lg text-xl'>Interview List with Candidate Feedback</h2>

        {interviewList?.length == 0&& 
        <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Video className = "h-9 w-9 text-primary" />
          <h2>You don't have any interviews created</h2>
          <Button>+ Create New Interview</Button>
        </div>}

       {interviewList&&
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 xl:grid-cols-4 gap-5">
            {interviewList.map((interview, index)=>(
              <InterviewCard interview={interview} key={index}
              viewDetail={true}
              
              />

            ))}
          </div>
       
       
       }
      
    </div>
  )
}

export default SheduledInterview

"use client"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Video } from "lucide-react";
import { useUser } from "@/app/provider";
import { supabase } from "@/services/supabaseClient";
import InterviewCard from "./interviewCard";


function LatestInterviewsList() {
    const [interviewList, setInterviewList] = useState([])
    const {user} = useUser();

    useEffect(()=>{
      user && GetInterviewList();
    }, [user])

    const GetInterviewList=async ()=>{
      let { data: Interviews, error } = await supabase
          .from('Interviews')
          .select('jobPosition, duration, interview_id, created_at, interview-feedback(userEmail)')
          .eq('userEmail', user?.email)
          .order('id', { ascending: false })
          .limit(6);

      console.log(Interviews)
      setInterviewList(Interviews);


    }

  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

      {interviewList?.length == 0&& 
       <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Video className = "h-9 w-9 text-primary" />
          <h2>You don't have any interviews created</h2>
          <Button>+ Create New Interview</Button>
       </div>}

       {interviewList&&
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 xl:grid-cols-4 gap-5">
            {interviewList.map((interview, index)=>(
              <InterviewCard interview={interview} key={index} />

            ))}
          </div>
       
       
       }

    
    </div>
  )
}

export default LatestInterviewsList

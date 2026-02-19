'use client'
import { useState } from 'react'
import { ArrowLeft } from "lucide-react"
import { useRouter } from 'next/navigation'
import { Progress } from "@/components/ui/progress"
import FormContainer from './_components/FormContainer'
import QuestionList from './_components/QuestionList'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { InterviewType } from '@/services/Constants'
import InterviewLink from './_components/InterviewLink'


function CreateInterview() {
  

  const router=useRouter();
  const[step,setStep]=useState(1);
  const[formData, setFormData]=useState({});
  const [interviewId,setInterviewId]=useState();
  const [questionList,setQuestionList]=useState([]);  


  const onHandleInputChange=(field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    console.log("formData", formData);
  }

  const onGoToNext=() => {
    if (!formData?.jobPosition || !formData?.jobDescription || !formData?.duration  || !formData?.type)
    {
      toast("Please enter all details !")
      return;
    }
    setStep(step+1);
  }

  const onCreateLink=(data)=>{
    console.log('Interview ID received:', data.interview_id);
    setInterviewId(data.interview_id);
    setQuestionList(data.questionList);
    setStep(step+1);
  }
  

  return (
    <div className='mt-2 px-10 md:px-24 lg:px-44 xl:px-56'>
       <div className='flex gap-5 items-center'>
         <ArrowLeft onClick={() => router.back()} className='cursor-pointer'/>
         <h2 className='font-bold text-2xl'>Create New Interview</h2>
       </div >

       <Progress value={step * 33.33} className="my-5"/>
       {step==1?<FormContainer onHandleInputChange={onHandleInputChange}
       GoToNext={()=>onGoToNext()} />
       :step==2?<QuestionList formData={formData} onCreateLink={(data)=>onCreateLink(data)} />:
          step==3?
          <InterviewLink interview_id={interviewId} 
          formData={formData}
          questionList={questionList}
          />:null}
    </div>
  )
}

export default CreateInterview

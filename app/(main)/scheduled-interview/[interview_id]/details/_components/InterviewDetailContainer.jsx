import React from 'react'
import { Clock, MessageCircleQuestionIcon } from 'lucide-react';
import { Calendar } from 'lucide-react';
import moment from 'moment';

function InterviewDetailContainer({interviewDetail}) {
  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
        <h2 className='text-2xl font-bold '>{interviewDetail?.jobPosition}</h2>

        <div className='mt-5 flex items-center justify-between lg:w-full lg:pr-20 xl:pr-40 2xl:pr-60 border border-gray-300 p-3 rounded-md bg-secondary shadow-md'>
            <div>
                <h2 className='text-sm text-gray-600'>Duration</h2>
                <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4'/> {interviewDetail?.duration} </h2>
            </div>

            <div>
                <h2 className='text-sm text-gray-600'>Created On</h2>
                <h2 className='flex text-sm font-bold items-center gap-2'><Calendar className='h-4 w-4'/> {moment(interviewDetail?.created_at).format('MMM DD,yyyy')} </h2>
            </div>
       
            {interviewDetail?.type &&<div>
                <h2 className='text-sm text-gray-600'>Type</h2>
                <h2 className='flex text-sm font-bold items-center gap-2'><Clock className='h-4 w-4'/> {interviewDetail.type.split(',')[0].trim()} </h2>
            </div>}

        </div>

        <div className='mt-5'>
            <h2 className='text-lg font-bold'>Job Description</h2>
            <p className='text-sm leading-5'>{interviewDetail?.jobDescription}</p>
        </div>

        <br/>
        <hr className= "border-1 border-black-700"/>
        
        <div className='mt-5'>
            <h2 className='text-lg font-bold'>Interview Questions</h2>
            <div className='grid grid-cols-2 gap-5'>
                {(typeof interviewDetail?.questionList === 'string' 
                  ? JSON.parse(interviewDetail.questionList) 
                  : interviewDetail?.questionList)?.map((item, index)=>(
                    <h2 key={index} className='text-sm mt-2'> <MessageCircleQuestionIcon className='h-4 w-4 inline text-primary'/> {index+1}. {item?.question}</h2>
                  ))
                }
            </div>
        </div>


    </div>
  )
}

export default InterviewDetailContainer

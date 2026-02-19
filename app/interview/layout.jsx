'use client'
import React from 'react'
import InterviewHeader from './_components/InterviewHeader'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useState } from 'react'


function InterviewLayout({children}) {

    const [interviewInfo, setInterviewInfo]=useState();
  return (
    <InterviewDataContext.Provider value={{interviewInfo, setInterviewInfo}}>
      <div className='min-h-screen bg-gray-50'>
        <InterviewHeader/>
        {children}
      </div>
    </InterviewDataContext.Provider>
  )
}

export default InterviewLayout
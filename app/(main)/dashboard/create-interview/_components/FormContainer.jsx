
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/Constants'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'


function FormContainer({onHandleInputChange, GoToNext}) {
  const [selectedTypes, setSelectedTypes] = useState([])

  const AddInterviewType = (title) => {
    const updatedTypes = selectedTypes.includes(title)
      ? selectedTypes.filter((item) => item !== title)
      : [...selectedTypes, title]

    setSelectedTypes(updatedTypes)
    onHandleInputChange('type', updatedTypes)
  }
  return (
    <div className='p-5 bg-white rounded-2xl'>
        <div className='mt-5'>
            <h2 className='text-sm font-medium' >Job Position</h2>
            <Input
              placeholder="e.g. Full Stack Developer"
              className='mt-2'
              onChange={(event) => onHandleInputChange('jobPosition', event.target.value)}
            />
        </div> 

        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Job Description</h2>
            <Textarea
              placeholder='Enter Detailed Job Description'
              className='h-[200px] mt-2'
              onChange={(event) => onHandleInputChange('jobDescription', event.target.value)}
            />
        </div> 

        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Duration</h2>
            <Select onValueChange={(value) => onHandleInputChange('duration', value)}>
               <SelectTrigger className="w-full mt-2">
                 <SelectValue placeholder="Select Duration" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="5 Min">5 Min</SelectItem>
                  <SelectItem value="15 Min">15 Min</SelectItem>
                  <SelectItem value="30 Min">30 Min</SelectItem>
                  <SelectItem value="45 Min">45 Min</SelectItem>
                  <SelectItem value="60 Min">60 Min</SelectItem>
               </SelectContent>
            </Select>
            
        </div> 

        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Type</h2>
            <div className='flex gap-3  flex-wrap mt-2'> 
                {InterviewType.map((type, index) => (
                    <div key={index} 
                     className={`flex gap-1 px-2 p-1 bg-white rounded-2xl border border-gray-300 cursor-pointer items-center hover:bg-orange-50 
                              ${selectedTypes.includes(type.title) && 'bg-orange-100 border-orange-500'}`}
                              onClick={() => AddInterviewType(type.title)}>
                              <type.icon className='h-4 w-4'/>
                              <span>{type.title}</span>
                        

                    </div>
                ))}
            </div>
        </div> 

        <div className='mt-7 flex justify-center' onClick={()=>GoToNext()}>
          <Button className='flex items-center cursor-pointer'>Generate Questions <ArrowRight /></Button>
        </div>


    </div>
  )
}

export default FormContainer

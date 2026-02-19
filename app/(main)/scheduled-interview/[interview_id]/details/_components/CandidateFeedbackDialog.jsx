import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function CandidateFeedbackDialog({candidate}) {

    const feedback=candidate?.feedback?.feedback
    const rating = feedback?.rating || {}
  const isRecommended = feedback?.recommended === true || feedback?.recommended === 'true' || feedback?.recommended === 1 || feedback?.recommended === '1'
    const scores = [rating?.techicalSkills, rating?.communication, rating?.problemSolving, rating?.experince, rating?.confidence].filter(s => s !== undefined && s !== null)
    const overallScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : 'N/A'

  return (
    <div>
       <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline" className="text-primary mt-2 cursor-pointer bg-green-500 text-white hover:bg-green-700 hover:text-white">View Report</Button>
         </DialogTrigger>
         <DialogContent className="rounded-3xl">
           <DialogHeader>
             <DialogTitle className='text-3xl font-bold'>Feedback</DialogTitle>
             <DialogDescription asChild>
                <div className='mt-1'>
                    <div className='flex justify-between items-center border border-gray-300 p-3 rounded-md bg-secondary'>
                      <div className='flex items-center gap-5'>
                        <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
                        <div>
                          <h2 className='font-bold text-lg'>{candidate?.userName}</h2>
                          <h2 className='text-sm text-gray-500'>{candidate?.userEmail}</h2>
                        </div>
                      </div>
                  
                      <div className='flex gap-3 items-center'>
                         <h2 className='text-primary text-2xl font-bold mt-2'>{overallScore}/10</h2>
                      </div>
                    </div>

                    <div className='mt-3 '>
                        <h2 className='font-bold text-black '>Skills Assesment</h2>
                        <div className='mt-2 grid grid-cols-2 gap-4'>

                            <div>
                                <h2 className='flex justify-between'>Technical Skills <span>{feedback?.rating?.techicalSkills}/10</span></h2>
                                <Progress value={feedback?.rating?.techicalSkills * 10} className="w-full mt-2" />
                            </div>

                             <div>
                                <h2 className='flex justify-between'>Communication Skills <span>{feedback?.rating?.communication}/10</span></h2>
                                <Progress value={feedback?.rating?.communication * 10} className="w-full mt-2" />
                            </div>

                            <div>
                                <h2 className='flex justify-between'>Problem Solving <span>{feedback?.rating?.problemSolving}/10</span></h2>
                                <Progress value={feedback?.rating?.problemSolving * 10} className="w-full mt-2" />
                            </div>

                            <div>
                                <h2 className='flex justify-between'>Experience Skills <span>{feedback?.rating?.experince}/10</span></h2>
                                <Progress value={feedback?.rating?.experince * 10} className="w-full mt-2" />
                            </div>

                            <div>
                                <h2 className='flex justify-between'> Confidence level <span>{feedback?.rating?.confidence}/10</span></h2>
                                <Progress value={feedback?.rating?.confidence * 10} className="w-full mt-2" />
                            </div>

                        </div>
                    </div>

                    <div className='mt-3'>
                        <h2 className='font-bold text-black'>Performance Summary</h2>
                        <div className='p-3 bg-secondary mt-2 rounded-md'>
                          <p className='text-sm text-gray-700'>{feedback?.summery}</p>
                        </div>
                    </div>

                    <div className={`p-3 rounded-md mt-3 flex items-center justify-between ${isRecommended ? 'bg-green-100' : 'bg-red-100'}`}>
                        <div>
                         <h2 className={`font-bold ${isRecommended ? 'text-green-700' : 'text-red-700'}`}>Recommendation Msg:</h2>
                         <p className={`text-sm ${isRecommended ? 'text-green-600' : 'text-red-600'}`}>{feedback?.RecommendationMsg}</p>
                        </div>

                      {/*<Button className={`px-3 py-1 text-sm ${isRecommended ? 'bg-green-700' : 'bg-red-700'}`}>Send Msg</Button>*/}
                      
                    </div>
                </div>

             </DialogDescription>
           </DialogHeader>
         </DialogContent>
       </Dialog>
    </div>
  )
}

export default CandidateFeedbackDialog

import React from 'react'

function QuestionListContainer({questionList}) {
  return (
    <div>
        <h2 className='text-lg font-bold mb-4 mb-5'>Generated Interview Questions:</h2>
                <div className='p-5  border border-gray-300 rounded-xl bg-white mt-5'>
                  {questionList.map((item, index) => (
                    <div key={index} className='p-5 bg-white border-2 border-gray-200 mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                      <h4 className='font-medium text-gray-700 mb-4'>{index + 1}. {item.question}</h4>
                      <div className='inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full'>
                        <span className='text-green-600 text-sm font-semibold'>
                          ✦ {item.type || 'Unknown Type'}
                        </span>
                      </div>
                    </div>

                
                
                  ))}
                </div>
      
    </div>
  )
}

export default QuestionListContainer

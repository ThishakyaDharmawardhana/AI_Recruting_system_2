import React from 'react'
import WelcomeContainer from "./_components/WelcomeContainer"
import CreateOptions from './_components/CreateOptions'
import LatestInterviewsList from "./_components/LatestInterviewsList";


function Dashboard() {
  return (
    <div>
        {/*<WelcomeContainer />*/}
        <h1 className='my-3 font-bold text-2xl'>Dashboard</h1>
        <CreateOptions />

        <LatestInterviewsList />
    </div>
  )
}

export default Dashboard

import React from 'react'
import PageHeader from '../components/PageHeader'
import WhoWeAre from './WhoWeAre'
import MissionVission from './MissionVission'

const page = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <PageHeader pageTitle={'About Us'} bgColor={'black'} />
      <div className='grid grid-cols-2 md:grid-cols-1'>
        <WhoWeAre />
        <MissionVission />
      </div>
    </div>
  )
}

export default page

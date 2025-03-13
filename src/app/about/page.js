import React from 'react'
import PageHeader from '../components/PageHeader'
import WhoWeAre from './WhoWeAre'
import MissionVission from './MissionVission'

const page = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <PageHeader pageTitle={'About Us'} bgColor={'black'}/>
      <WhoWeAre/>
      <MissionVission/>
    </div>
  )
}

export default page

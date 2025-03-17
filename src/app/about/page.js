import React from 'react'
import PageHeader from '../components/PageHeader'
import WhoWeAre from './WhoWeAre'
import MissionVission from './MissionVission'
import Counter from './Counter'
import Team from './Team'

const page = () => {
  return (
    <div className='bg-white'>
      <PageHeader pageTitle={'About Us'} bgColor={'black'}/>
      <WhoWeAre/>
      <MissionVission/>
      <Counter/>
      <Team/>
    </div>
  )
}

export default page

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { teamMembers } from './TeamMembers'
import TeamMember from '../components/TeamMember'

const Team = () => {
  return (
    <div className='mb-10 bg-[#f5f5f5] py-20'>
      <SectionHeader title={'Our Team'} description={'Visit our highly skilled team members.'} />

      <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {teamMembers.length > 0 && teamMembers.map((member) => {
          return <TeamMember key={member.id} teamMember={member} />
        })}
      </div>
    </div>
  )
}

export default Team

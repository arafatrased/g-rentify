import React from 'react'
import Image from 'next/image'
import TeamMemberSocialAccounts from './TeamMemberSocialAccounts'
import placeholderUserImage from '../../../images/about-us/team/placeholder-iamge.jpg'

const TeamMember = ({ teamMember }) => {
  const { name, title, profile, socialMedia } = teamMember
  return (
    <div className='shadow-lg pb-5 rounded-lg group relative overflow-hidden'>
      <div className='overflow-hidden'>
        <Image className='rounded-lg w-full h-[400px] object-cover group-hover:scale-[1.05] transition-all duration-300' src={profile ? profile : placeholderUserImage} alt='team member' priority={true} />
      </div>
      <div className='px-5 py-4'>
        <h3 className='font-bold text-2xl mt-4 mb-1'>{name && name}</h3>
        <p>{title && title}</p>
      </div>

      <TeamMemberSocialAccounts github = {socialMedia.github} linkedin = {socialMedia.linkedin} portfolio = {socialMedia.portfolio}/>
    </div>
  )
}

export default TeamMember

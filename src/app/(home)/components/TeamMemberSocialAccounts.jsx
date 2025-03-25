import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';

const TeamMemberSocialAccounts = ({ github, linkedin, portfolio }) => {
  return (
    <div className='bg-orange-500 rounded-lg py-3 text-white px-5 w-[60%] absolute top-[20px] right-[-20px] translate-x-[100%] group-hover:translate-x-0 transition-all duration-300'>
      <ul className='flex items-center gap-8 text-2xl'>
        <Link href={github && github}>
          <li className='cursor-pointer'><FaGithub /></li>
        </Link>
        <Link href={linkedin && linkedin}>
          <li className='cursor-pointer'><FaLinkedin /></li>
        </Link>
        <Link href={portfolio && portfolio}>
          <li className='cursor-pointer'><TbWorld /></li>
        </Link>
      </ul>
    </div>
  )
}

export default TeamMemberSocialAccounts

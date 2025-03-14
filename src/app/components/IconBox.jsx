import React from 'react'
import Image from 'next/image'

const IconBox = ({icon, title, description}) => {
  return (
    <div className='py-10 px-10 text-center group'>
      <Image className='w-[60px] mx-auto group-hover:scale-[1.3] transition-all duration-300' alt='Icon Box' src={icon && icon}/>
      <h3 className='font-bold text-2xl my-3'>{title && title}</h3>
      <p>{description && description}</p>
    </div>
  )
}

export default IconBox

import React from 'react'
import Image from 'next/image'

const CounterBox = ({icon, number, description}) => {
  return (
    <div className='py-10 px-10 text-center group'>
      <Image className='w-[60px] mx-auto group-hover:scale-[1.1] transition-all duration-300' src={icon && icon}/>
      <h3 className='font-bold text-2xl my-3'>{number && number}</h3>
      <p>{description && description}</p>
    </div>
  )
}

export default CounterBox

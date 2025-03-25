import React from 'react'

const SectionHeader = ({title, description}) => {
  return (
    <div className='text-center mb-10'>
      <h2 className='font-bold text-4xl mb-5'>{title && title}</h2>
      <p className='w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>{description && description}</p>
    </div>
  )
}

export default SectionHeader

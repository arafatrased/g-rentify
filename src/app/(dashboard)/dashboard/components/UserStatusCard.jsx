import React from 'react'

const UserStatusCard = ({number, title, bgColor}) => {
  return (
    <div className='p-4 rounded-md text-white' style={{
        background: bgColor && bgColor
    }}>
      <h3 className='font-bold text-3xl mb-3'>{number && number}</h3>
      <p>{title && title}</p>
    </div>
  )
}
 
export default UserStatusCard

import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const NotificationListItem = ({ title, time }) => {
    return (
        <div className='flex items-center justify-between  hover:bg-green-700 py-5 px-3 rounded-md'>
            <div>
                <div className='flex gap-3'>
                    <IoMdNotifications className='text-2xl mt-1' />
                    <div>
                        <p className='font-bold'>{title && title}</p>
                        <p>{time && time}</p>
                    </div>
                </div> 
            </div>
            <div>
                <FaAngleRight />
            </div>
        </div>
    )
}

export default NotificationListItem

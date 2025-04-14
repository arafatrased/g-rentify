'use client'
import React, { useState } from 'react'
import BreadCrumbs from '../(dashboard)/dashboard/components/BreadCrumbs'
import DatePicker from 'react-datepicker'
import Button from '../(home)/components/Button'
import "react-datepicker/dist/react-datepicker.css";
import Label from 'daisyui/components/label'

const page = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 3)));


    return (
        <div id='cart_page'>
            <div className='container mx-auto py-10'>
                <div className='mb-5'>
                    {/* breadcrumb  */}
                    <BreadCrumbs />
                </div>

                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-4  border border-[#e3e3e3] py-5 px-3 rounded-md'>
                        <div className="col-span-12 xl:col-span-3 order-3 flex justify-center">
                            <div className="p-3 rounded h-fit text-center mb-5">
                                <h4 className="text-xl font-bold mb-5">Select Your Rental Date</h4>
                                <div className='flex items-center gap-2 flex-col lg:flex-row mb-3'>
                                    <p className="text-base font-medium mb-1">Arrival Date:</p>
                                    <DatePicker
                                        showIcon
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 48 48"
                                            >
                                                <mask id="ipSApplication0">
                                                    <g
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinejoin="round"
                                                        strokeWidth="4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            d="M40.04 22v20h-32V22"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                                        ></path>
                                                    </g>
                                                </mask>
                                                <path
                                                    fill="currentColor"
                                                    d="M0 0h48v48H0z"
                                                    mask="url(#ipSApplication0)"
                                                ></path>
                                            </svg>
                                        }
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={new Date()}
                                        className="text-center border border-[#e3e3e3] py-1 max-w-40 outline-gray-200 mb-1"
                                    />
                                </div>


                                <div className='flex items-center gap-3 flex-col lg:flex-row'>
                                <p className="text-base font-medium mb-1">Return Date:</p>
                                <DatePicker
                                    showIcon
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 48 48"
                                        >
                                            <mask id="ipSApplication0">
                                                <g
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeLinejoin="round"
                                                    strokeWidth="4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        d="M40.04 22v20h-32V22"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                                    ></path>
                                                </g>
                                            </mask>
                                            <path
                                                fill="currentColor"
                                                d="M0 0h48v48H0z"
                                                mask="url(#ipSApplication0)"
                                            ></path>
                                        </svg>
                                    }
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={new Date().setDate(new Date().getDate() + 3)}
                                    maxDate={new Date().setDate(new Date().getDate() + 30)}
                                    className="text-center border border-[#e3e3e3] py-1 max-w-40 outline-gray-200 mb-3"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-8  border border-[#e3e3e3] py-5 px-3 rounded-md'>
                        dfdf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

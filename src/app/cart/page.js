'use client'
import React, { useState } from 'react'
import BreadCrumbs from '../(dashboard)/dashboard/components/BreadCrumbs'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const CartPage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 3)));

    const cartProducts = [
        {
            title: "Sony FE 200-600mm f/5.6-6.3 G OSS",
            quantity: "10",
            length: 7,
            price: 250,
        },
        {
            title: "Sony FE 200-600mm f/5.6-6.3 G OSS",
            quantity: "10",
            length: 7,
            price: 250,
        },
        {
            title: "Sony FE 200-600mm f/5.6-6.3 G OSS",
            quantity: "10",
            length: 7,
            price: 250,
        },
        {
            title: "Sony FE 200-600mm f/5.6-6.3 G OSS",
            quantity: "10",
            length: 7,
            price: 250,
        },
        {
            title: "Sony FE 200-600mm f/5.6-6.3 G OSS",
            quantity: "10",
            length: 7,
            price: 250,
        },
    ]


    return (
        <div id='cart_page'>
            <div className='container mx-auto py-10'>
                <div className='mb-5'>
                    {/* breadcrumb  */}
                    <BreadCrumbs />
                </div>

                <div className='grid grid-cols-12 gap-10'>
                    {/* select rental date  */}
                    <div className='md:col-span-4 col-span-12 max-h-[300px] border border-[#e3e3e3] py-5 px-3 rounded-md'>
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

                    {/* cart table */}
                    <div className='md:col-span-8 col-span-12 px-3'>
                        <div className='rounded-lg'>
                            <Table className={'border border-[#e3e3e3] rounded-full'}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] border border-[#e3e3e3] text-center">Item</TableHead>
                                        <TableHead className={'border border-[#e3e3e3] text-center'}>Qty</TableHead>
                                        <TableHead className='border border-[#e3e3e3] text-center'>Length</TableHead>
                                        <TableHead className="border border-[#e3e3e3] text-center">Subtotal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cartProducts.map((product, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium py-6 border ">{product.title}</TableCell>
                                            <TableCell className='text-center flex justify-center items-center  h-full'>
                                                <div className='flex items-center justify-between gap-y-2 max-w-[150px]'>
                                                    <button className='bg-green-600 text-white px-3 py-1 rounded-sm cursor-pointer'>-</button>
                                                    <input type='number' value={product.quantity} className='border-none w-[50px] text-center focus:outline-none' />
                                                    <button className='bg-green-600 text-white px-3 py-1 rounded-sm cursor-pointer'>+</button>
                                                </div>
                                            </TableCell>
                                            <TableCell className={'border border-[#e3e3e3] text-center'}>{product.length}</TableCell>
                                            <TableCell className=" border border-[#e3e3e3] text-center">${product.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                                <TableFooter className='py-5'>
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            <div className='flex justify-end'>
                                                <Button className='bg-green-600 hover:bg-green-700 hover:text-white text-white cursor-pointer' variant="outline">Continue Shopping</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <div className='mt-10 flex gap-10 flex-col sm:flex-row'>
                            <div className='sm:w-6/12 border border-[#e3e3e3] py-5 px-5 rounded-md w-full'>
                                <h3 className='font-bold text-xl mb-1'>Discount Code</h3>
                                <p>Enter Your coupon code if you have one.</p>
                                <Input className={'mt-2'} type="text" placeholder="Coupon Code" />
                                <Button className='bg-green-600 text-white hover:bg-green-700 hover:text-white cursor-pointer w-full mt-3' variant="outline">Apply Coupon</Button>
                            </div>

                            <div className='sm:w-6/12 w-full border border-[#e3e3e3] py-5 px-5 rounded-md text-right'>
                                <p>Subtotal: <span>$250</span></p>
                                <p>Shipping(Rount Trip): <span>$50</span></p>
                                <p>Grand Total: <span>$500</span></p>
                                <Button className='bg-green-600 text-white hover:bg-green-700 hover:text-white cursor-pointer ml-auto mt-3' variant="outline">Procced To Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;

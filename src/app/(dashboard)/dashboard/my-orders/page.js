'use client'
import Link from 'next/link'
import React from 'react'
import UserStatusCard from '../components/UseStatsCard'
import Image from 'next/image'
import { FaDownload } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import OrderStatusBadge from '../components/OrderStatusBadge'

const MyOrders = () => {

    const allOrders = [
        {
            id: 1,
            client: {
                name: 'Nabil Siddik',
                email: 'nabilsiddik90@gmail.com',
                profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            },
            product: {
                name: 'Lenovo Laptop',
                image: 'https://i.ibb.co.com/7JPrMtFn/OIP-3.jpg',
                orderId: '1xdgjkh324khd'
            },
            amount: 250,
            payment: {
                title: 'Bkash',
                logo: 'https://i.ibb.co.com/XZxv1hk1/flat-origami-paper-bird-vector-808505-4051.jpg'
            },
            status: 'pending',
            date: '12/05/2025'
        },

        {
            id: 2,
            client: {
                name: 'Nabil Siddik',
                email: 'nabilsiddik90@gmail.com',
                profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            },
            product: {
                name: 'Lenovo Laptop',
                image: 'https://i.ibb.co.com/7JPrMtFn/OIP-3.jpg',
                orderId: '1xdgjkh324khd'
            },
            amount: 250,
            payment: {
                title: 'Bkash',
                logo: 'https://i.ibb.co.com/XZxv1hk1/flat-origami-paper-bird-vector-808505-4051.jpg'
            },
            status: 'shipped',
            date: '12/05/2025'
        },

        {
            id: 3,
            client: {
                name: 'Nabil Siddik',
                email: 'nabilsiddik90@gmail.com',
                profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            },
            product: {
                name: 'Lenovo Laptop',
                image: 'https://i.ibb.co.com/7JPrMtFn/OIP-3.jpg',
                orderId: '1xdgjkh324khd'
            },
            amount: 250,
            payment: {
                title: 'Bkash',
                logo: 'https://i.ibb.co.com/XZxv1hk1/flat-origami-paper-bird-vector-808505-4051.jpg'
            },
            status: 'received',
            date: '12/05/2025'
        },

        {
            id: 4,
            client: {
                name: 'Nabil Siddik',
                email: 'nabilsiddik90@gmail.com',
                profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            },
            product: {
                name: 'Lenovo Laptop',
                image: 'https://i.ibb.co.com/7JPrMtFn/OIP-3.jpg',
                orderId: '1xdgjkh324khd'
            },
            amount: 250,
            payment: {
                title: 'Bkash',
                logo: 'https://i.ibb.co.com/XZxv1hk1/flat-origami-paper-bird-vector-808505-4051.jpg'
            },
            status: 'cancled',
            date: '12/05/2025'
        },

        {
            id: 5,
            client: {
                name: 'Nabil Siddik',
                email: 'nabilsiddik90@gmail.com',
                profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            },
            product: {
                name: 'Lenovo Laptop',
                image: 'https://i.ibb.co.com/7JPrMtFn/OIP-3.jpg',
                orderId: '1xdgjkh324khd'
            },
            amount: 250,
            payment: {
                title: 'Bkash',
                logo: 'https://i.ibb.co.com/XZxv1hk1/flat-origami-paper-bird-vector-808505-4051.jpg'
            },
            status: 'pending',
            date: '12/05/2025'
        },
    ]

    return (
        <div id='all-orders' className='p-5'>
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link href={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-[#03b00b]" href={"/dashboard/all-orders"}>All Orders</Link></li>
                    </ul>
                </div>
            </div>

            {/* Status Cards */}
            {/* <div className='grid grid-cols-12 items-center gap-5 mb-6'>
                {statusData.map((status, index) => (
                    <div key={index} className='col-span-2'>
                        <UserStatusCard number={status.number} title={status.title} bgColor={status.bgColor} />
                    </div>
                ))}
            </div> */}

            <div className='grid grid-cols-12 items-center gap-5 mb-6'>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={20} title={'Pending Orders'} bgColor={'#C537DD'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={20} title={'Shipped Orders'} bgColor={'#3980D8'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={20} title={'Received Orders'} bgColor={'#2CAA62'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={20} title={'Cancled Orders'} bgColor={'#EB0000'} />
                </div>
            </div>


            <div className='bg-white shadow-md p-5 rounded-md'>
                {/* Filters (left static, implement if needed) */}
                <div className='grid grid-cols-12 gap-5 mb-6'>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Show By</legend>
                            <select className="select w-full border" onChange={(e) => setLimit(parseInt(e.target.value))}>
                                <option value={12}>12 Row</option>
                                <option value={24}>24 Row</option>
                                <option value={36}>36 Row</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Payment By</legend>
                            <select className="select w-full border" value={'df'} onChange={(e) => setFilterRole(e.target.value)}>
                                <option value="">All</option>
                                <option value="bkash">Bkash</option>
                                <option value="nagad">Nagad</option>
                                <option value="rocket">Rocket</option>
                                <option value="upay">Upay</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Status By</legend>
                            <select className="select w-full border" value={'df'} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                <option value="shipped">Shipped</option>
                                <option value="received">Received</option>
                                <option value="cancled">Cancled</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Search By</legend>
                            <input
                                className='input border w-full'
                                type='search'
                                placeholder='Transection ID / Customer Email'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </fieldset>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table border border-[#e3e3e3]">
                        <thead className='bg-green-600 text-white'>
                            <tr className='border-b border-[#e3e3e3]'>
                                <th>Number</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((order, index) => (
                                <tr key={order.id} className='border-b border-[#e3e3e3]'>
                                    {/* <th>#{(currentPage - 1) * limit + index + 1}</th> */}
                                    <th>#{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <Image src={order?.product?.image} alt={order?.product} width={72} height={72} />
                                                    <p>{order?.product?.orderId}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order?.product?.name}</div>
                                                <p>{order?.product?.orderId}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${order?.amount}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <Image src={order?.payment?.logo} alt={order?.payment?.title} width={72} height={72} />
                                                    <p>{order?.product?.orderId}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order?.payment?.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <OrderStatusBadge badgeText={order?.status} />
                                    </td>
                                    <td>{order?.date}</td>
                                    <td className='flex gap-4'>
                                        <span onClick={() => openModal(user?._id)} className='text-lg text-[#2AA75F] cursor-pointer'><FaDownload /></span>
                                        <span className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {/* <div className='flex justify-between items-center mt-6 px-2'>
                    <p>Showing {limit} of {totalUsers} results</p>
                    <div className="join">
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                        ))}
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default MyOrders

'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import UserStatusCard from '../components/UseStatsCard'
import { FaDownload } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import OrderStatusBadge from '../components/OrderStatusBadge'
import { getOrders } from '@/app/serverData/getOrders'
import Loading from '@/app/(home)/components/Loading';

const AllOrders = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [allorders, setAllOrders] = React.useState([]);
    const [limit, setLimit] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [search, setSearch] = React.useState('');
    const [filterRole, setFilterRole] = React.useState('');
    const [filterStatus, setFilterStatus] = React.useState('');

    const getorders = async () => {
        setIsLoading(true)
        try {
            const allOrder = await getOrders()
            setAllOrders(allOrder.orders)
        } catch (error) {
            console.error("Error fetching orders:", error)
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getorders();
    }, []);

    const filteredOrders = allorders
        ?.filter(order => {
            if (filterRole && order?.payment?.title?.toLowerCase() !== filterRole.toLowerCase()) return false;
            if (filterStatus && order?.status?.toLowerCase() !== filterStatus.toLowerCase()) return false;
            if (
                search &&
                !(
                    order?.transactionId?.toLowerCase().includes(search.toLowerCase()) ||
                    order?.client?.email?.toLowerCase().includes(search.toLowerCase())
                )
            ) return false;
            return true;
        });

    const totalPages = Math.ceil(filteredOrders.length / limit);
    const paginatedOrders = filteredOrders.slice((currentPage - 1) * limit, currentPage * limit);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const openModal = (id) => {
        console.log("Open modal for ID:", id);
    };

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
            <div className='grid grid-cols-12 items-center gap-5 mb-6'>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={allorders.filter(o => o.status === 'pending').length} title={'Pending Orders'} bgColor={'#C537DD'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={allorders.filter(o => o.status === 'shipped').length} title={'Shipped Orders'} bgColor={'#3980D8'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={allorders.filter(o => o.status === 'received').length} title={'Received Orders'} bgColor={'#2CAA62'} />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-full'>
                    <UserStatusCard number={allorders.filter(o => o.status === 'cancled').length} title={'Cancled Orders'} bgColor={'#EB0000'} />
                </div>
            </div>

            <div className='bg-white shadow-md p-5 rounded-md'>
                {/* Filters */}
                <div className='grid grid-cols-12 gap-5 mb-6'>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Show By</legend>
                            <select className="select w-full border" onChange={(e) => setLimit(parseInt(e.target.value))}>
                                <option value={10}>10 Row</option>
                                <option value={20}>20 Row</option>
                                <option value={30}>30 Row</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Payment By</legend>
                            <select className="select w-full border" value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
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
                            <select className="select w-full border" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
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
                    {isLoading ?
                        <Loading />
                        :
                        <table className="table border border-[#e3e3e3]">
                            <thead className='bg-green-600 text-white'>
                                <tr>
                                    <th>Number</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allorders.map((order, index) => (
                                    <tr key={order._id} className='border-b border-[#e3e3e3]'>
                                        <th>#{index + 1}</th>
                                        <td>
                                            <div>
                                                <div className="font-bold">{order.email || 'No Email'}</div>
                                                <p>{order.transactionId || 'No Transaction ID'}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">Item(s): {order?.gadgetId?.length || 0}</div>
                                                <p>Cart ID(s): {order?.cartItemsId?.join(', ')}</p>
                                            </div>
                                        </td>
                                        <td>${order?.totalRentValue || 0}</td>
                                        <td>
                                            <div className="font-bold">Online</div>
                                        </td>
                                        <td>
                                            <OrderStatusBadge badgeText={order?.status || 'N/A'} />
                                        </td>
                                        <td>{new Date(order?.date).toLocaleDateString()}</td>
                                        <td className='flex gap-4'>
                                            <span className='text-lg text-[#2AA75F] cursor-pointer'><FaDownload /></span>
                                            <span className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    }

                </div>

                {/* Pagination */}
                <div className='flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between items-center mt-6 px-2'>
                    <p>Showing {paginatedOrders.length} of {filteredOrders.length} results</p>
                    <div className="join">
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                        ))}
                        <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllOrders;

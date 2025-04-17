'use client'
import Link from 'next/link'
import React from 'react'
import UserStatusCard from '../components/UserStatusCard'
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const AllUser = () => {

    const allUsers = [
        {
            id: 1,
            name: 'Nabil Siddik',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Dhaka Mirpur',
            role: 'Admin',
            email: 'nabilsiddik90@gmail.com',
            phone: '01957282230',
            status: 'Approved',
            created: '10/05/2024'
        },
        {
            id: 2,
            name: 'Sarah Hossain',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Chittagong Agrabad',
            role: 'User',
            email: 'sarah.hossain@example.com',
            phone: '01812345678',
            status: 'Pending',
            created: '12/05/2024'
        },
        {
            id: 3,
            name: 'Rakib Hasan',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Sylhet Zindabazar',
            role: 'Moderator',
            email: 'rakib.hasan@example.com',
            phone: '01798765432',
            status: 'Approved',
            created: '15/05/2024'
        },
        {
            id: 4,
            name: 'Mitu Akter',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Khulna Sonadanga',
            role: 'User',
            email: 'mitu.akter@example.com',
            phone: '01611223344',
            status: 'Blocked',
            created: '18/05/2024'
        },
        {
            id: 5,
            name: 'Tanvir Rahman',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Rajshahi Sadar',
            role: 'Admin',
            email: 'tanvir.rahman@example.com',
            phone: '01599887766',
            status: 'Approved',
            created: '20/05/2024'
        },
        {
            id: 6,
            name: 'Lima Chowdhury',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Barishal Rupatali',
            role: 'User',
            email: 'lima.chowdhury@example.com',
            phone: '01455667788',
            status: 'Pending',
            created: '22/05/2024'
        },
        {
            id: 7,
            name: 'Hasib Mahmud',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Dhaka Uttara',
            role: 'User',
            email: 'hasib.mahmud@example.com',
            phone: '01911112222',
            status: 'Approved',
            created: '23/05/2024'
        },
        {
            id: 8,
            name: 'Rina Akter',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Comilla Kandirpar',
            role: 'User',
            email: 'rina.akter@example.com',
            phone: '01722334455',
            status: 'Pending',
            created: '24/05/2024'
        },
        {
            id: 9,
            name: 'Jamil Khan',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Gazipur Tongi',
            role: 'Moderator',
            email: 'jamil.khan@example.com',
            phone: '01833445566',
            status: 'Approved',
            created: '25/05/2024'
        },
        {
            id: 10,
            name: 'Sumaiya Sultana',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Rangpur Pirgacha',
            role: 'User',
            email: 'sumaiya.sultana@example.com',
            phone: '01644556677',
            status: 'Blocked',
            created: '26/05/2024'
        },
        {
            id: 11,
            name: 'Tariq Islam',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Narayanganj Fatullah',
            role: 'Admin',
            email: 'tariq.islam@example.com',
            phone: '01987654321',
            status: 'Approved',
            created: '27/05/2024'
        },
        {
            id: 12,
            name: 'Shila Rahman',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Mymensingh Trishal',
            role: 'User',
            email: 'shila.rahman@example.com',
            phone: '01544332211',
            status: 'Pending',
            created: '28/05/2024'
        },
        {
            id: 13,
            name: 'Rahat Karim',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Bogura Shibganj',
            role: 'User',
            email: 'rahat.karim@example.com',
            phone: '01712349876',
            status: 'Approved',
            created: '29/05/2024'
        },
        {
            id: 14,
            name: 'Mehjabin Noor',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Feni Sadar',
            role: 'Moderator',
            email: 'mehjabin.noor@example.com',
            phone: '01876543210',
            status: 'Approved',
            created: '30/05/2024'
        },
        {
            id: 15,
            name: 'Arif Chowdhury',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Noakhali Subarnachar',
            role: 'User',
            email: 'arif.chowdhury@example.com',
            phone: '01499887766',
            status: 'Pending',
            created: '31/05/2024'
        },
        {
            id: 16,
            name: 'Salma Islam',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Jessore Sadar',
            role: 'User',
            email: 'salma.islam@example.com',
            phone: '01344332211',
            status: 'Approved',
            created: '01/06/2024'
        },
        {
            id: 17,
            name: 'Noman Haque',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Brahmanbaria Sarail',
            role: 'Moderator',
            email: 'noman.haque@example.com',
            phone: '01910101010',
            status: 'Blocked',
            created: '02/06/2024'
        },
        {
            id: 18,
            name: 'Fatema Jannat',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Dinajpur Birganj',
            role: 'User',
            email: 'fatema.jannat@example.com',
            phone: '01888889999',
            status: 'Pending',
            created: '03/06/2024'
        },
        {
            id: 19,
            name: 'Biplob Roy',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Pabna Ishwardi',
            role: 'User',
            email: 'biplob.roy@example.com',
            phone: '01765656565',
            status: 'Approved',
            created: '04/06/2024'
        },
        {
            id: 20,
            name: 'Nusrat Jahan',
            profile: 'https://i.ibb.co.com/Y4T0LX3q/nabil-siddik-youtube-channel-ministry-of-web-programming.png',
            address: 'Bagerhat Rampal',
            role: 'User',
            email: 'nusrat.jahan@example.com',
            phone: '01666667777',
            status: 'Blocked',
            created: '05/06/2024'
        }
    ];


    return (
        <div id='all-user' className='p-5'>
            <div className='mb-5'>
                {/* breadcrumb  */}
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li>
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li>
                            <Link className="text-[#03b00b]" href={"/dashboard/all-user"}>
                                All User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* user status cards */}
            <div className='grid grid-cols-12 items-center gap-5'>
                <div className='col-span-4'>
                    <UserStatusCard number={447} title='Pending Users' bgColor={'#C435DC'} />
                </div>
                <div className='col-span-4'>
                    <UserStatusCard number={605} title='Approved Users' bgColor={'#2AA75F'} />
                </div>
                <div className='col-span-4'>
                    <UserStatusCard number={10} title='Blocked Users' bgColor={'#E32A46'} />
                </div>
            </div>

            <div className='bg-[#ffffff] shadow-md p-5 mt-10 rounded-md'>
                {/* filters  */}
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Show By</legend>
                            <select defaultValue="Pick a browser" className="select w-full border">
                                <option>12 Row</option>
                                <option>24 Row</option>
                                <option>36 Row</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Role By</legend>
                            <select defaultValue="Pick a browser" className="select w-full border">
                                <option>Admin</option>
                                <option>Renter</option>
                                <option>Lender</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Status By</legend>
                            <select defaultValue="Pick a browser" className="select w-full border">
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Blocked</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Search By</legend>
                            <input className='input input bordered border' type='search' placeholder='Name / Email / Number' />
                        </fieldset>
                    </div>
                </div>

                {/* user table */}
                <div>
                    <div className="overflow-x-auto mt-10">
                        <table className="table border">
                            {/* head */}
                            <thead>
                                <tr className='border-b border-[#e3e3e3]'>
                                    <th>Num</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((user, index) => {
                                    return <tr key={user.id} className='border-b border-[#e3e3e3]'>
                                        <th>
                                            <span>#{index + 1}</span>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user?.profile}
                                                            alt={user?.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.role}
                                        </td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {user?.phone}
                                        </td>
                                        <td>
                                            {user?.status}
                                        </td>
                                        <td>
                                            {user?.created}
                                        </td>
                                        <td className='flex items-center align-middle'>
                                            <div className='flex items-center justify-center gap-4  h-full'>
                                                <span className='text-lg text-[#2AA75F] cursor-pointer'><FaEdit /></span>
                                                <span className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>


                        <div className='w-full py-5 px-5'>
                            <div className='flex items-center justify-between'>
                                <div className='w-6/12'>
                                    <p>showing 12 of 60 results</p>
                                </div>
                                <div className='w-6/12 text-right'>
                                    <div className="join">
                                        <button className="join-item btn">1</button>
                                        <button className="join-item btn">2</button>
                                        <button className="join-item btn btn-disabled">...</button>
                                        <button className="join-item btn">99</button>
                                        <button className="join-item btn">100</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUser

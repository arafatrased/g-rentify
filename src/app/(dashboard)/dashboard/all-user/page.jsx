import Link from 'next/link'
import React from 'react'
import UserStatusCard from '../components/UserStatusCard'

const AllUser = () => {
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
                            <input className='input input bordered border' type='search' placeholder='Name / Email / Number'/>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUser

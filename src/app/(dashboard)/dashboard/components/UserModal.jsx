'use client'
import React, { useState } from 'react'

const UserModal = ({ openModal, userId, allUser }) => {
    const selectedUser = allUser.find((user) => user.id === userId)

    // update user 
    const handleUpdateUser = (e) => {
        e.preventDefault()
        const form = e.target 

        const name = form.name.value
        const address = form.address.value
        const profile = form.profile.value
        const email = form.email.value
        const phone = form.phone.value
        const role = form.role.value
        const status = form.status.value
        
        const updatedUser = {
            name,
            address,
            profile,
            email,
            phone,
            role,
            status
        }

        console.log(updatedUser)
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-5">Update User</h3>

                    {/* update user form  */}
                    <form onSubmit={handleUpdateUser}>
                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Name</label>
                            <input name='name' type="text" className='input input-bordered w-full' defaultValue={selectedUser?.name} />
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Image</label>
                            <input name='profile' type="text" className='input input-bordered w-full' defaultValue={selectedUser?.profile} />
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Address</label>
                            <input name='address' type="text" className='input input-bordered w-full' defaultValue={selectedUser?.address} />
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Email</label>
                            <input name='email' type="email" className='input input-bordered w-full' defaultValue={selectedUser?.email} />
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Phone</label>
                            <input name='phone' type="text" className='input input-bordered w-full' defaultValue={selectedUser?.phone} />
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Role</label>
                            <select name='role' className='select select-bordered w-full'>
                                <option value='admin'>Admin</option>
                                <option value='renter'>Renter</option>
                                <option value='lender'>Lender</option>
                            </select>
                        </div>

                        <div className='input-group mb-3'>
                            <label className='label mb-2'>Status</label>
                            <select name='status' className='select select-bordered w-full'>
                                <option value='approved'>Approved</option>
                                <option value='pending'>Pending</option>
                                <option value='blocked'>Blocked</option>
                            </select>
                        </div>

                        <input type="submit" className='btn w-full mt-3 bg-green-600 text-white' value={'Update User'} />

                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default UserModal

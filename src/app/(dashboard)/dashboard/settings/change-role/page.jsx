'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import imageUrl from './../../../../../lib/makeImageUrl';

const ChangeRolePage = () => {

    const [selectedImage, setSelectedImage] = useState("");
    const [bio, setBio] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const govtId = await imageUrl(selectedImage);
        const payload = {
            name,
            phone,
            address,
            bio,
            govtId

        }
        console.log(payload);


    }
    return (
        <div className='py-5 px-5'>
            {/* breadcrumb  */}
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <Link href={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/settings'>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard/settings/change-role' className="text-[#03b00b]">
                            Become a Lender
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="page-container py-16 min-h-[80vh] bg-white shadow-md rounded-xl">
                <h1 className='text-xl md:text-xl lg:text-2xl font-bold text-center mb-8'>Apply to Become a Lender</h1>
                <form className='w-10/12 md:w-8/12 lg:w-4/12 mx-auto'>

                    <fieldset className="fieldset mb-3">
                    <label className="block mb-2 text-sm font-medium">Full Name*:</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Full Name *"
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                    <label className="block mb-2 text-sm font-medium">Phone*:</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Phone Number *"
                            required
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                    <label className="block mb-2 text-sm font-medium">Address*:</label>
                        <input

                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Address *"
                        />
                    </fieldset>

                    {/* <fieldset className="fieldset mb-3">
                        <label className="block mb-2 text-sm font-medium">Gadget categories you want to lend (*):</label>

                        <div className="flex flex-col gap-2 text-sm">
                            <label>
                                <input type="checkbox" name="categories" value="Phones" className="mr-2" />
                                Phones
                            </label>
                            <label>
                                <input type="checkbox" name="categories" value="Laptops" className="mr-2" />
                                Laptops
                            </label>
                            <label>
                                <input type="checkbox" name="categories" value="Drones" className="mr-2" />
                                Drones
                            </label>
                            <label>
                                <input type="checkbox" name="categories" value="Cameras" className="mr-2" />
                                Cameras
                            </label>
                            <label>
                                <input type="checkbox" name="categories" value="Smartwatches" className="mr-2" />
                                Smartwatches
                            </label>
                            <label>
                                <input type="checkbox" name="categories" value="Other" className="mr-2" />
                                Other
                            </label>
                        </div>
                    </fieldset> */}

                    <fieldset className="fieldset mb-3">
                        <label className="block mb-2 text-sm font-medium">Upload Govt. ID*:</label>
                        <input
                            onChange={(e) => setSelectedImage(e.target.files[0])}
                            type="file"
                            className="file-input w-full focus:outline-none border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Upload Govt. ID"
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-3 flex items-center gap-2">
                        <label className="block mb-2 text-sm font-medium">Bio:</label>
                        <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="" className='textarea w-full bg-transparent' placeholder='Anything you want to say? (optional)'></textarea>
                    </fieldset>

                    <fieldset className="fieldset mb-3 flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <label className="text-sm">I agree to the <Link className='underline text-green-600' href='/dashboard/settings/terms-and-conditions'>terms and conditions</Link> *</label>
                    </fieldset>

                    <fieldset className="fieldset mb-6">
                        <input
                            type="submit"
                            onClick={handleSubmit}
                            name="submit"
                            value={'Submit Application'}
                            className='bg-[#00B22C] text-white px-5 py-2 text-sm rounded active:scale-[0.95] transition-all duration-300 cursor-pointer w-full uppercase'
                        />
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default ChangeRolePage;
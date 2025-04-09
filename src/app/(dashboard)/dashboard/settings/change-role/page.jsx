'use client'
import Link from 'next/link';
import React from 'react';

const ChangeRolePage = () => {
    return (
        <div className='py-16'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-8'>Apply to Become a Lender</h1>
            <form className='w-10/12 md:w-8/12 lg:w-4/12 mx-auto'>

                <fieldset className="fieldset mb-3">
                    <input
                        type="text"
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Full Name *"
                    />
                </fieldset>

                <fieldset className="fieldset mb-3">
                    <input
                        type="tel"
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Phone Number *"
                    />
                </fieldset>

                <fieldset className="fieldset mb-3">
                    <input
                        type="text"
                        className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Address *"
                    />
                </fieldset>

                <fieldset className="fieldset mb-3">
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
                </fieldset>

                <fieldset className="fieldset mb-3">
                    <label className="block mb-2 text-sm font-medium">Upload Govt. ID (*):</label>
                    <input
                        type="file"
                        className="file-input w-full focus:outline-none border-[#03b00b] bg-transparent rounded-[2px]"
                        placeholder="Upload Govt. ID"
                    />
                </fieldset>

                <fieldset className="fieldset mb-3 flex items-center gap-2">
                    <textarea name="" id="" className='textarea w-full bg-transparent' placeholder='Anything you want to say? (optional)'></textarea>
                </fieldset>

                <fieldset className="fieldset mb-3 flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <label className="text-sm">I agree to the <Link className='underline text-green-600' href='/dashboard/settings/terms-and-conditions'>terms and conditions</Link> *</label>
                </fieldset>

                <fieldset className="fieldset mb-6">
                    <input
                        type="submit"
                        value={'Submit Application'}
                        className='bg-[#00B22C] text-white px-5 py-2 text-sm rounded active:scale-[0.95] transition-all duration-300 cursor-pointer w-full uppercase'
                    />
                </fieldset>
            </form>

        </div>
    );
};

export default ChangeRolePage;
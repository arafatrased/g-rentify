'use client'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Link from 'next/link';

const CartPage = () => {

    const [cartProducts, setCartProducts] = useState([
        { id: 1, title: "Sony FE 200-600mm f/5.6-6.3 G OSS", quantity: 10, length: 7, price: 250 },
        { id: 2, title: "Sony FE 200-600mm f/5.6-6.3 G OSS", quantity: 15, length: 7, price: 250 },
        { id: 3, title: "Sony FE 200-600mm f/5.6-6.3 G OSS", quantity: 9, length: 7, price: 250 },
        { id: 4, title: "Sony FE 200-600mm f/5.6-6.3 G OSS", quantity: 8, length: 7, price: 250 },
        { id: 5, title: "Sony FE 200-600mm f/5.6-6.3 G OSS", quantity: 7, length: 7, price: 250 }
    ]);

    const [quantity, setQuantity] = useState(1)
    const [decreaseBtnDisabled, setDecreaseBtnDisabled] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    // Set Date three day later
    const [endDate, setEndDate] = useState(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        return currentDate;
    });

    // Decrease quantity
    const handleDecreaseQuantity = (productId) => {
        const updatedProducts = cartProducts.map((product) => {
            if(product.id === productId){
                return {...product, quantity: product.quantity - 1}
            }
            return product
        })
        setCartProducts(updatedProducts)
    }

    // Increase quantity
    const handleIncreaseQuantity = (productId) => {
        const updatedProducts = cartProducts.map((product) => {
            if(product.id === productId){
                return {...product, quantity: product.quantity + 1}
            }
            return product
        })
        setCartProducts(updatedProducts)
    }


    return (
        <div id='cart_page'>
            <div className='container mx-auto py-10'>
                <div className='mb-5'>
                    {/* breadcrumb  */}
                    <div className="breadcrumbs text-sm mb-6">
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className="text-[#03b00b]" href={"/cart"}>
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-10 flex-col lg:flex-row'>
                    {/* select rental date  */}
                    <div className='w-full lg:w-4/12 max-h-[300px] border border-[#e3e3e3] py-5 px-3 rounded-md'>
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

                    <div className='w-full lg:w-8/12 px-3'>
                        {/* cart table */}
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full bg-[#F9FAFB] rounded-md border">
                                <thead>
                                    <tr className="uppercase">
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Length</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {cartProducts.map((product, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border last:border-none border-slate-200"
                                        >
                                            <td className="flex items-center gap-2 py-6">
                                                <h4 className='font-bold'>{product?.title}</h4>
                                            </td>
                                            <td className="capitalize text-gray-500">
                                                <div id='cart-page-quantity' className='flex items-center justify-between gap-y-2 max-w-[150px]'>
                                                    <button disabled={product.quantity <= 1} onClick={() => handleDecreaseQuantity(product.id)} className='bg-green-600 text-white px-3 py-1 rounded-sm cursor-pointer'>-</button>
                                                    <input type='number' value={product.quantity} className='border-none w-[50px] text-center focus:outline-none' />
                                                    <button onClick={() => handleIncreaseQuantity(product.id)} className='bg-green-600 text-white px-3 py-1 rounded-sm cursor-pointer'>+</button>
                                                </div>
                                            </td>
                                            <td className='text-center'>
                                                {product.length} Days
                                            </td>
                                            <td className="font-bold text-center">${product?.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='mt-10 flex gap-10 flex-col sm:flex-row'>
                            <div className='sm:w-6/12 border border-[#e3e3e3] py-5 px-5 rounded-md w-full'>
                                <h3 className='font-bold text-xl mb-1'>Discount Code</h3>
                                <p>Enter Your coupon code if you have one.</p>

                                <form>
                                    <input className={'mt-3 border border-[#e3e3e3] w-full rounded-md py-3 px-4 mb-3'} type="text" placeholder="Coupon Code" />
                                    <button type='submit' className="bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-2 text-sm rounded transition-all duration-300 cursor-pointer w-fit uppercase mt">
                                        Apply Coupon
                                    </button>
                                </form>
                            </div>

                            <div className='sm:w-6/12 w-full border border-[#e3e3e3] py-5 px-5 rounded-md text-right'>
                                <p>Subtotal: <span>$250</span></p>
                                <p>Shipping(Rount Trip): <span>$50</span></p>
                                <p>Grand Total: <span>$500</span></p>
                                <button type='submit' className="bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-2 text-sm rounded transition-all duration-300 cursor-pointer w-fit uppercase mt-3">
                                    Procced To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;

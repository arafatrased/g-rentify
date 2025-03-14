import React from 'react'
import Image from 'next/image'

import whoWeAreGadgetImg from '../../images/about-us/who-we-are-gadgets.jpg'

const WhoWeAre = () => {
  return (
    <div id='who_we_are' className='my-20'>
      <div className="container mx-auto flex items-center gap-20">
        <div className='w-6/12 overflow-hidden'>
          <Image className='w-full rounded-lg' src={whoWeAreGadgetImg} alt='who we are' />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-4xl mb-5'>Who We are?</h2>
          <p>At G-Rentify, we are revolutionizing the way people access technology. As a leading gadget rental platform, we provide a smart, affordable, and sustainable way to experience the latest devices without the burden of ownership.

            Whether you need a high-end laptop for work, a gaming console for entertainment, or a camera for your next adventure, we’ve got you covered. Our mission is to make technology accessible to everyone by offering flexible rental plans that fit your needs.

            By choosing to rent instead of buy, you're not just saving money—you’re also contributing to a greener, more sustainable future by reducing e-waste. Join us and experience the freedom of renting the best gadgets, whenever you need them!</p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre

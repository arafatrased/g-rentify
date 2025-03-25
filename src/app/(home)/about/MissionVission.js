import React from 'react'
import IconBox from '../components/IconBox'

import mission from '../../../images/about-us/mission.png'
import vission from '../../../images/about-us/vission.png'
import support from '../../../images/about-us/support.png'

const MissionVission = () => {
  return (
    <div className='my-20 bg-[#f5f5f5]'>
      <div className='container mx-auto flex gap-5 flex-col lg:flex-row'>
        <IconBox icon={mission} title={'Our Mission'} description="Our mission is to revolutionize gadget accessibility by offering a seamless and affordable rental service. We strive to provide individuals and businesses with the latest technology without the constraints of ownership, making innovation more accessible and sustainable."/>

        <IconBox icon={vission} title={'Our Vission'} description="We envision a future where everyone can experience cutting-edge technology without financial barriers. By promoting gadget rentals, we aim to reduce e-waste and create a smarter, more sustainable way to access tech."/>

        <IconBox icon={support} title={'Our Support'} description="At G-Rentify, customer satisfaction is our priority. We offer reliable support, ensuring a hassle-free rental experience with responsive assistance, easy returns, and expert guidance to help you make the most of your rented gadgets."/>
      </div>
    </div>
  )
}

export default MissionVission

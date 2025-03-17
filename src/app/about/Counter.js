import React from 'react'
import CounterBox from '../components/CounterBox'
import happyClientIcon from '../../images/about-us/happy-clients.png'
import teamMemberIcon from '../../images/about-us/team.png'
import rebtIcon from '../../images/about-us/rent.png'

const Counter = () => {
    return (
        <div>
            <div className='container mx-auto flex items-center gap-10 my-20 flex-col lg:flex-row'>
                <div className='lg:w-[40%] text-center lg:text-left'>
                    <h2 className='font-bold text-4xl mb-5'>Trusted by over 362 clients</h2>
                    <p>Experts to level up your business</p>
                </div>
                <div className='grid md:grid-cols-3 gap-10 lg:w-[60%]'>
                    <CounterBox icon={happyClientIcon} number={500} description={'Happy Clients'} />
                    <CounterBox icon={teamMemberIcon} number={6} description={'Team Members'} />
                    <CounterBox icon={rebtIcon}  number={1000} description={'Projects'} />
                </div>
            </div>
        </div>
    )
}

export default Counter

"use client"
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RegistrarForm from './RegistrarForm';
import Button from '@/app/(home)/components/Button';

const RegistrationTab = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Tabs className='w-full my-10'>
                <TabList className={`flex justify-center`}>

                    <Tab><Button buttonText={"Sign Up as LENDER"}></Button></Tab>
                    <Tab><Button buttonText={"Sign Up as RENTER"}></Button></Tab>
                </TabList>

                <TabPanel>
                    <RegistrarForm regiTitle={"Lender Sign Up"} role={"lender"} />
                </TabPanel>
                <TabPanel>
                    <RegistrarForm regiTitle={"Renter Sign Up"} role={"renter"} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RegistrationTab;
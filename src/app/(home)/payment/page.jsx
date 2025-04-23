'use client'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentPage = () => {
    return (
        <div className='min-h-screen p-10'>
            <h1 className='text-3xl text-center'>Payment Page</h1>
            <div className='w-6/12 md:w-4/12 mx-auto my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;
"use client";


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
    const router = useRouter()
    const session = useSession();
    const user = session?.data?.user;
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [cart, setCart] = useState([]);

      const fetchMyOrder = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_LINK}/my-cart?email=${user?.email}`,
          );
          const data = await res.json();
          setCart(data);
    
          if (data.length === 0) {
            return
          }
        } catch (error) {
          // console.log("Failed to fetch my order.", error);
        } 
      };
    
      useEffect(() => {
        fetchMyOrder();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user?.email]);
      
      const totalPrice = cart?.reduce((acc, item) => acc + item.totalRentValue, 0);
      

      const fetchClientSecret = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_LINK}/create-payment-intent`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ price: totalPrice }),
            },
          );
          const data = await res.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          // console.log("Failed to fetch client secret.", error);
        }
      } 
      useEffect( () => {
        if (totalPrice > 0) {
          fetchClientSecret();
        }   
      },[totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error) {
            // console.error('[error]', error);
            setError(error.message)
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            // Here you can send the paymentMethod.id to your server to process the payment
            setError('')
        }

        // Confirm the payment with the client secret
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name,
                        email: user?.email,
                    },
                },
            },
        );
        if (confirmError) {
            // console.error('[error]', confirmError);
            setError(confirmError.message)
        } else {

            if (paymentIntent.status === 'succeeded') {
                // console.log('Payment succeeded! Transaction Id:', paymentIntent.id);

                // Here you can send the paymentIntent.id to your server to update the order status
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    totalRentValue: totalPrice,
                    cartItemsId: cart.map(item => item._id),
                    date: new Date(), //should be in ISO format(moment.js)
                    gadgetId: cart.map(item => item.gadgetId),
                    status: 'pending',
                }
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK}/payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payment),
                });
                const data = await res.json();
                if (data) {
                    // console.log('Payment successful!', data);
                    toast.success(`Payment successful! Transaction Id: ${paymentIntent.id}`);
                    setCart([])
                    router.push('/my-account')
                    // Here you can update the order status in your application state
                } else {
                    console.error('Failed to update order status:', data.message);
            }
            // Here you can send the paymentIntent.id to your server to update the order status
            setError('')
        }
      }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Checkout via Stripe</h1>
            <div className='flex flex-col gap-4 w-full md:w-8/12 justify-between items-center p-8'>
                <div className='border border-gray-300 w-full p-4 rounded-md shadow-sm'>
                    <h1 className='text-2xl'>Total Amount: <span className='text-green-700 font-semibold'>${totalPrice}</span></h1>
                </div>
                <div className='border border-gray-300 w-full p-4 rounded-md shadow-sm'>
                    <h1 className='font-semibold'>Shipping Address</h1>
                    <h1>Name: {user?.name}</h1>
                    <h1>Email: {user?.email}</h1>
                    <h1>Address: {cart[0]?.address}</h1>
                    <h1>City: {cart[0]?.city}</h1>
                    <h1>Phone: {cart[0]?.state}</h1>
                </div>
            </div>
            <div className="border w-full md:w-8/12 border-gray-300 pt-4 pb-10 px-4 rounded-md shadow-sm">
                <h1 className="text-xl font-semibold mb-4">Card Information</h1>
                <p className="text-gray-600 mb-10">Please enter your card details below:</p>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>

            <button
                disabled={!stripe || !clientSecret}
                className="my-10 py-2 px-4 w-6/12 rounded-2xl border bg-green-600 text-white hover:bg-green-500 "
                type="submit"
            >
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
        </form>

    );
};

export default CheckoutForm;
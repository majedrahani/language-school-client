import { Elements } from '@stripe/react-stripe-js';
import React from 'react';

import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    // const { cartId } = useParams(); 
    const searchParams = new URLSearchParams(window.location.search);
    const price = searchParams.get('price'); 
    console.log(price);

    return (
        <div className='w-full my-20'>
            <h2 className='text-center text-2xl mb-10 text-gray-900'>Payment Please</h2>
            <div className=' bg-[#dafbfc] mx-10 lg:mx-40 p-10 lg:p-20'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
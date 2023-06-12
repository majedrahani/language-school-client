import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { MdPayment } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    
    

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                
                date: new Date(),
                
                // status: 'service pending',
               
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            title: 'Payment Done',
                            text: 'Success fully purchased',
                            imageUrl: 'https://i.ibb.co/HpzVC4S/tnx.png',
                            imageWidth: 400,
                            imageHeight: 200,
                            
                          })
                    }
                })
        }
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3 className='p-1 border text-center text-gray-900 border-[#01A2A6] mb-4 rounded-sm'>Amount : ${price}</h3>
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
                <div className=' flex justify-center mt-5'>
                    <button className='btn btn-xs rounded-sm btn-ghost bg-[#01A2A6]  text-white ml-auto w-full'
                        type="submit" disabled={!stripe || !clientSecret || processing}>
                        <MdPayment /> Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
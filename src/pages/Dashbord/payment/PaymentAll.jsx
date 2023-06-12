import React from 'react';
import usePayments from '../../../Hooks/usePayments';

const PaymentAll = () => {
    const [payments] = usePayments();
    console.log(payments);
    return (
        <div className='w-full'>
            <h2>Payment History</h2>

            <div className=' w-full'>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#01A2A6] text-white'>
                                <th>#</th>
                                <th className='pl-20'>Transaction id</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th className=' text-center'>Date</th>

                            </tr>
                        </thead>
                        <tbody className='bg-[#dafbfc]'>
                            {
                                payments.map((payment, index) =>
                                    <tr key={payment._id}>
                                        <th>{index + 1}</th>
                                        <td>{payment.transactionId}</td>
                                        <td>
                                            {payment.email}
                                        </td>
                                        <td>${payment.price}</td>
                                        <td>{payment.date}</td>
                                        <th>

                                            

                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentAll;
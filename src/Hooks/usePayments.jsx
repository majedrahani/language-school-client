import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const usePayments = () => {
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        
        
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [payments, refetch];
    return (
        <div>
            
        </div>
    );
};

export default usePayments;
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAddClass = () => {
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: addClasses = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
        
        
        queryFn: async () => {
            const res = await axiosSecure(`/addClasses?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [addClasses, refetch];
};

export default useAddClass;
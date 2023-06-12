import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch(' https://language-school-server-kappa.vercel.app/instructors');
            return res.json();
            
        }
    })
    console.log(instructors);
    return [instructors, loading, refetch]
};

export default useInstructors;
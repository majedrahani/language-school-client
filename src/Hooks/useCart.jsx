import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useCart = () => {
    const {user} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')

    const { data: cart = [] , refetch, } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers: {
                    // authorization : `bearer ${token}`
                    // 'content-type': ''
                }
            })
            return res.json();
        }
    })
    return [cart, refetch]
}
export default useCart;
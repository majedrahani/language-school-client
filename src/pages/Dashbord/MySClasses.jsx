import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../Provider/AuthProvider';

const MySClasses = () => {
    const [cart, setCart] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/carts?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    } ,[])
    
    return (
        <div>
            <h2>my selected classes</h2>
        </div>
    );
};

export default MySClasses;
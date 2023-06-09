import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";
import Swal from 'sweetalert2';

const MySClasses = () => {
    const [carts, refetch] = useCart();
    console.log(carts);
    const total = carts.reduce((sum, cart) => cart.price + sum, 0);

    const handleDelete = cart => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${cart._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className=' w-full pr-20 pl-5 '>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#01A2A6] text-white'>
                            <th>#</th>
                            <th className='pl-20'>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th className=' text-center'>Action</th>

                        </tr>
                    </thead>
                    <tbody className='bg-[#dafbfc]'>
                        {
                            carts.map((cart, index) =>
                                <tr key={cart._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-sm w-12 h-12">
                                                    <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cart.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cart.instructor_name}
                                    </td>
                                    <td>${cart.price}</td>
                                    <th>

                                        <div className=' flex '>
                                            <button className="btn btn-xs rounded-sm btn-ghost bg-[#01A2A6]  text-white ml-auto"><MdPayment /> Pay</button>

                                            <button onClick={() => handleDelete(cart)} className="btn btn-xs rounded-sm btn-ghost bg-red-500  text-white ml-auto"> delete</button>
                                        </div>

                                    </th>
                                </tr>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MySClasses;
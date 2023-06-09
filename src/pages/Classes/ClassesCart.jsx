import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useClasses from '../../Hooks/useClasses';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassesCart = ({ singleClass }) => {
    
    // console.log(singleClass);
    const { students, price, name, instructor_name, image, available_seats, _id,  } = singleClass;
    const { user } = useContext(AuthContext);
    const [, , refetch] = useClasses()
    const location = useLocation();
    const navigate = useNavigate()

    const handleSelect = singleClass => {
        console.log(singleClass);
        if (user && user.email) {
            const cartItem = { classId: _id, name, image, price, instructor_name, students, email : user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The class successfully selected.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You Have to Login fast',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div>
            <div className={`${available_seats > 0 ?
                "card card-compact h-full rounded-none  bg-base-100 shadow-xl"
                : "card card-compact h-full rounded-none bg-red-200  shadow-xl"
                }`}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body line-clamp-none">
                    <h2 className="card-title mb-0">{name}</h2>
                    <p className=' mt-0'><span className=' font-bold text-[#01A2A6]'>Instructor :</span> {instructor_name}</p>
                    <div className=' flex justify-between'>
                        <p className=' font-bold text-[#01A2A6]'>Students : {students}</p>
                        <p className=' font-bold text-[#01A2A6]'>Price : ${price}</p>
                    </div>
                    <p className=' font-bold text-[#01A2A6]'>Available Seats :
                        <span className={`${available_seats > 0 ? "ml-2 px-3 bg-amber-100 rounded" : "bg-red-500 text-white ml-2 rounded px-3"}`}>
                            {available_seats}
                        </span></p>
                    <div className='w-full flex justify-center'>
                        <button onClick={() => handleSelect(singleClass)} className={`${available_seats > 0 ?
                            "btn bg-[#01A2A6] text-white mt-5 btn-sm w-full rounded"
                            : "btn btn-disabled  text-white mt-5 btn-sm w-full rounded"
                            }`}>Select</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClassesCart;
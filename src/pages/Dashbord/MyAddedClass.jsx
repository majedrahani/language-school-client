import React from 'react';
import useAddClass from '../../Hooks/useAddClass';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAddedClass = () => {
    const [addClasses] = useAddClass();

    // const handleDelete = addClasses => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(` http://localhost:5000/addClasses/${addClasses._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your file has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })
    //         }
    //     })
    // }
    return (
        <div className='w-full'>
            <h2>My added class</h2>

            <div className=' w-full'>
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
                                addClasses.map((addedClass, index) =>
                                    <tr key={addedClass._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask rounded-sm w-12 h-12">
                                                        <img src={addedClass.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{addedClass.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {addedClass.instructor_name}
                                        </td>
                                        <td>${addedClass.price}</td>
                                        <th>

                                            <div className=' flex '>
                                               


                                                <button onClick={() => handleDelete(addClasses)} className="btn btn-xs rounded-sm btn-ghost bg-red-500  text-white ml-auto"> delete</button>
                                            </div>

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

export default MyAddedClass;
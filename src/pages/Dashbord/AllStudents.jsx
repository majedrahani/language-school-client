import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdAdminPanelSettings, MdEmail } from 'react-icons/md';
import { BsThreeDots } from "react-icons/bs";
import Swal from 'sweetalert2';

const AllStudents = () => {
    const { data: students = [], refetch } = useQuery(['students'], async () => {
        const res = await fetch('http://localhost:5000/students')
        return res.json();
    })

    const handleMakeAdmin = student => {
        fetch(`http://localhost:5000/students/admin/${student._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${student.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = student => {
        fetch(`http://localhost:5000/students/instructor/${student._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${student.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = student => {
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
                fetch(`http://localhost:5000/students/${student._id}`, {
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
        <div className='flex justify-center w-full h-full'>
            <Helmet>
                <title>All Students| Language Academy</title>
            </Helmet>

            <div className=' w-full  '>
                <h2 className=' font-bold text-2xl '>Total students : {students.length}</h2>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#01A2A6] text-white'>
                                <th>#</th>
                                {/* <th className='pl-20'>Student image</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className=''>Action</th>

                            </tr>
                        </thead>
                        <tbody className='bg-[#dafbfc]'>
                            {
                                students.map((student, index) =>
                                    <tr key={student._id}>
                                        <th>{index + 1}</th>
                                        {/* <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask rounded-sm w-12 h-12">
                                                        <img src={student.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{student.name}</div>

                                                </div>
                                            </div>
                                        </td> */}
                                        <td>
                                            {student.name}
                                        </td>
                                        <td className='flex gap-2'><MdEmail className='my-auto' />{student.email}</td>
                                        <td>
                                            {
                                                student.role === 'admin' ? 'Admin' :
                                                    student.role === 'instructor' ? 'Instructor' :
                                                        'Student'
                                            }
                                        </td>
                                        <th>
                                            <div className="dropdown dropdown-left">
                                                <label tabIndex={0} className="btn btn-xs btn-ghost m-1"><BsThreeDots /></label>
                                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  rounded-sm ">
                                                    <li className=''>
                                                        <button onClick={() => handleMakeAdmin(student)} className="btn btn-xs rounded-sm btn-ghost normal-case ml-auto "> Make Admin</button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => handleMakeInstructor(student)} className="btn btn-xs rounded-sm btn-ghost normal-case  ml-auto"> Make Instructor</button>
                                                    </li>

                                                    <li>
                                                        <button onClick={() => handleDelete(student)} className="btn btn-xs rounded-sm btn-ghost normal-case  ml-auto"> Remove</button>
                                                    </li>
                                                </ul>
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

export default AllStudents;
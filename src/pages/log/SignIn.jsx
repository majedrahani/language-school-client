import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import login from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                .then(() => {
                    const saveStudent = {name : data.name, email: data.email}
                    fetch('http://localhost:5000/students',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(saveStudent)
                        
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            Swal.fire('Successfully you have created an account!')
                            navigate('/')
                            reset()
                        }
                    })
                })
               
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>Sign Up | Language Academy</title>
            </Helmet>
            <div className='pt-28'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img src={login} alt="" className=' w-[660px]' />

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500">name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className="text-red-500">password is required</span>}

                                    {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirm_password", { required: true })} placeholder="password" className="input input-bordered" />
                                    {errors.confirm_password && <span className="text-red-500">Confirm is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered" />
                                    {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
                                    <label className="label">
                                        <p>
                                            Already have an account?
                                            <Link to='/Login' className=' font-bold text-[#01A2A6] pl-1'>Login</Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className=' btn bg-[#01A2A6] text-white'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
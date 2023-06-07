import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import login from '../../assets/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                Swal.fire('Successfully you have created an account!')
                reset()
            })
            .catch(error => console.log(error))
    }

    return (
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
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirm_password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.confirm_password && <span className="text-red-600">Confirm is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-600">Photo URL is required</span>}
                                <label className="label">
                                    <p>
                                        Already have an account?
                                        <Link to='/Login' className=' font-bold text-[#01A2A6] pl-1'>Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className=' btn bg-[#01A2A6] text-white'>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
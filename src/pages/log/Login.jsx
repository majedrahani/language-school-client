import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import login from '../../assets/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { signIn } = useContext(AuthContext);

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
                Swal.fire('Successfully you have logged in !')
                reset()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='pt-28'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" className=' w-[460px]' />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>
                                        New to here?
                                        <Link to='/singIn' className=' font-bold text-[#01A2A6] pl-1'>Sign in</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className=' btn bg-[#01A2A6] text-white'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
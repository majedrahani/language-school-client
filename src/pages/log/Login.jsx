import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import login from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
                    const saveStudent = {name : loggedUser.displayName, email: loggedUser.email}
                    fetch(' https://language-school-server-kappa.vercel.app/students',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(saveStudent)
                        
                    })
                    .then(res => res.json())
                    .then(() => {
                        
                            navigate(from, { replace: true }); 
                        
                    })
                
                
            })
            .catch(error => console.log(error.message))
    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire('Successfully you have logged in !')
                navigate(from, { replace: true });
                reset()
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>Login | Language Academy</title>
            </Helmet>
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
                                            <Link to='/singIn' className=' font-bold text-[#01A2A6] pl-1'>Sign Up</Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className=' btn bg-[#01A2A6] text-white'>Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn} className=' btn btn-outline text-[#01A2A6]'>
                                        <FcGoogle className=' text-xl' />
                                        Sign in with Google</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
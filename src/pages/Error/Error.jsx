import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Error = () => {
    return (
        <div className=' w-full'>
            <img src={error} alt="error image" className=' w-[600px] mx-auto relative' />
            <div className=' absolute top-3/4 left-1/2'>
                <h3 className=' flex justify-center gap-4 w-full text-center'>
                    <span className=' my-auto text-[24px] text-blue-400 '>Back to Home </span>
                    <Link to='/' className=' my-auto btn btn-sm rounded-none bg-blue-900 text-white'><FaArrowLeft className=' my-auto' /></Link></h3>
            </div>
        </div>
    );
};

export default Error;
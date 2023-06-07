import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-slate-100 ">
                <div className=' lg:flex justify-between w-full lg:px-40'>
                    <div className=' my-auto'>
                        <img src={logo} alt="logo" className='w-[300px]' />
                        
                    </div>
                    <div className=' mb-auto'>

                        <p className="font-bold">
                            Language Academy Industries Ltd. <br />Providing reliable tech since 2010
                        </p>
                        <p className=' pt-5'>
                            Contact : +123 456 7890
                        </p>

                    </div>
                    <div className=' mb-auto'>
                        <div className="grid grid-flow-col gap-4">
                            <a><FaTwitter className=' text-xl' /></a>
                            <a><FaYoutube className=' text-xl' /></a>
                            <a><FaFacebook className=' text-xl' /></a>
                        </div>
                    </div>
                </div>
                <p>Copyright © 2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;
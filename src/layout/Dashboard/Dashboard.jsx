import React from 'react';
import { FaChalkboardTeacher, FaHome } from 'react-icons/fa';
import { SiGoogleclassroom } from "react-icons/si";
import {BiSelectMultiple} from "react-icons/bi";
import { FcAcceptDatabase } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#01A2A6]  text-white">
                        {/* Sidebar content here */}
                        <div className='mb-10 '>
                            <li><Link to='/dashboard/mySClasses'><BiSelectMultiple /> My Selected Classes</Link></li>
                            <li><Link><FcAcceptDatabase className=' text-xl' /> My Enrolled Classes</Link></li>
                        </div>

                        <hr />

                        <div className=' mt-10 font-bold'>
                            <li><Link to="/"><FaHome /> Home</Link></li>
                            <li><Link to="/instructors"><FaChalkboardTeacher /> Instructors</Link></li>
                            <li><Link to="/classes"><SiGoogleclassroom /> Classes</Link></li>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
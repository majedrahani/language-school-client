import React from 'react';
import { FaChalkboardTeacher, FaHome, FaUsers } from 'react-icons/fa';
import { SiGoogleclassroom } from "react-icons/si";
import { BiSelectMultiple } from "react-icons/bi";
import { FcAcceptDatabase } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const Dashboard = () => {

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isAdmin);
    return (
        <>
            <Helmet>
                <title>Dashboard | Language Academy</title>
            </Helmet>
            <div className=''>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-start justify-start ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn font-bold text-[#01A2A6] drawer-button my-2 lg:hidden"><MdMenu /></label>
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-[#01A2A6]  text-white">
                            {/* Sidebar content here */}
                            {
                                isAdmin ? <>
                                    <div className='mb-10 '>
                                        <li><Link to='/dashboard'><FaHome /> Admin Home</Link></li>
                                        <li><Link to='/dashboard/allStudents'> <FaUsers /> All Students</Link></li>
                                        <li><Link><FcAcceptDatabase className=' text-xl' /> My Enrolled Classes</Link></li>
                                    </div>
                                </>: isInstructor ? <>
                                    <div className='mb-10 '>
                                        <li><Link to='/dashboard'><FaHome /> Instructor Home</Link></li>
                                        <li><Link to='/dashboard/mySClasses'><BiSelectMultiple /> My Selected Classes</Link></li>
                                        <li><Link><FcAcceptDatabase className=' text-xl' /> My Enrolled Classes</Link></li>
                                    </div>
                                </> : <>
                                    <div className='mb-10 '>
                                        <li><Link to='/dashboard'><FaHome /> Student Home</Link></li>
                                        <li><Link to='/dashboard/mySClasses'><BiSelectMultiple /> My Selected Classes</Link></li>
                                        <li><Link><FcAcceptDatabase className=' text-xl' /> My Enrolled Classes</Link></li>
                                    </div>
                                </> 
                            }

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
        </>
    );
};

export default Dashboard;
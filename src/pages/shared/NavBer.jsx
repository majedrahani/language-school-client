import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBer = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOption = <>
        <div className='font-bold text-[16px] flex'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Instructors</Link></li>
            <li><Link to='/'>Classes</Link></li>
        </div>

        <div className="divider divider-horizontal "></div>
        {
            user ?
                <li><Link onClick={handleLogOut} className='text-[16px]'>Log Out</Link></li>
                :
                <li><Link to='/login' className='text-[16px]'>Login</Link></li>
        }

    </>

    return (
        <div >
            <div className="navbar bg-base-100 fixed z-10 bg-opacity-90 max-w-screen-2xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbar-end ">
                            {navOption}
                        </ul>
                    </div>
                    <img src={logo} className=' w-[150px]' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className=' navbar-end'>
                    {
                        user &&
                        <div className="tooltip hover:tooltip-open tooltip-left py-0" data-tip={user && user.displayName}>
                            {user && <img src={user.photoURL} alt="" className='w-[50px] my-5 h-[50px] rounded-full border-4 border-[#01A2A6]' />} </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBer;
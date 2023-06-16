import React, { useContext } from 'react';
import NavBer from '../../pages/shared/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer';
import { AuthContext } from '../../Provider/AuthProvider';

const Main = () => {
    const { darkMode} = useContext(AuthContext)
    return (
        <div className={`${darkMode ? "bg-zinc-800 " : ''}`}>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
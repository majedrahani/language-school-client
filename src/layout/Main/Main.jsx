import React from 'react';
import NavBer from '../../pages/shared/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React, { useContext } from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './popularClasses/PopularClasses';
import PInstructors from './popularInstructors/PInstructors';
import Subscribe from './Subscribe';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    
    return (
        <div >
            <Helmet>
                <title>Home | Language Academy</title>
            </Helmet>
            <div className='pt-24'>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PInstructors></PInstructors>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;
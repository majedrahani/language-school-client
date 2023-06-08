import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './popularClasses/PopularClasses';
import PInstructors from './popularInstructors/PInstructors';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Language Academy</title>
            </Helmet>
            <div className='pt-24'>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PInstructors></PInstructors>
            </div>
        </>
    );
};

export default Home;
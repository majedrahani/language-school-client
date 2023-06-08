import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './popularClasses/PopularClasses';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Language Academy</title>
            </Helmet>
            <div className='pt-24'>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
            </div>
        </>
    );
};

export default Home;
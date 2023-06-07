import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Language Academy</title>
            </Helmet>
            <div className='pt-24'>
                <Banner></Banner>
            </div>
        </>
    );
};

export default Home;
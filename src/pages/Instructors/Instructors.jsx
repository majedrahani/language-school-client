import React from 'react';
import { Helmet } from 'react-helmet-async';
import instructorsImg from '../../assets/instructors.png'
import Cover from '../shared/Cover';
import useInstructors from '../../Hooks/useInstructors';
import InstructorCart from './InstructorCart';

const Instructors = () => {
    const [instructors] = useInstructors();
    // console.log(instructors);

    return (
        <div className='pt-28'>
            <Helmet>
                <title>Instructors | Language Academy</title>
            </Helmet>

            <Cover img={instructorsImg} title="Instructors"></Cover>

            <div className='my-20'>
                <h2 className=' text-2xl text-slate-900 text-center mb-10'>Our All Instructors</h2>
                <div className=' grid lg:grid-cols-3 gap-5 lg:px-24'>
                    {
                        instructors.map(singleInstructor => <InstructorCart
                            singleInstructor={singleInstructor}
                        ></InstructorCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;
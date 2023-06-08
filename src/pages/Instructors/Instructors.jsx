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

            <div>
                {
                    instructors.map(singleInstructor => <InstructorCart
                    singleInstructor={singleInstructor}
                    ></InstructorCart>)
                }
            </div>
        </div>
    );
};

export default Instructors;
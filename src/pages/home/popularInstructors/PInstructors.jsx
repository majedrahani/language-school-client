import React, { useContext, useEffect, useState } from 'react';
import useInstructors from '../../../Hooks/useInstructors';
import PInstructorsCart from './PInstructorsCart';
import { AuthContext } from '../../../Provider/AuthProvider';

const PInstructors = () => {
    const { darkMode } = useContext(AuthContext)
    const [popularInstructors, setPopularInstructors] = useState([]);
    const [instructors] = useInstructors()

    useEffect(() => {
        if (instructors.length > 0) {

            const sortedClasses = instructors.sort(
                (a, b) => b.classes_taken - a.classes_taken
            );

            setPopularInstructors(sortedClasses.slice(0, 6))
        }
    }, [instructors])

    // console.log(popularInstructors);
    return (
        <div className=' mb-20'>
            
                <h2 className={`${darkMode ? "text-2xl text-white text-center" : "text-2xl text-slate-900 text-center"}`}>Popular Instructors</h2>
           
            <div className=' flex overflow-scroll gap-4 lg:mx-36 pt-10 '>
                {
                    popularInstructors.map(instructor => <PInstructorsCart
                        key={instructor._id}
                        instructor={instructor}
                    ></PInstructorsCart>)
                }
            </div>
        </div>
    );
};

export default PInstructors;
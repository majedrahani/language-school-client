import React, { useEffect, useState } from 'react';
import useClasses from '../../../Hooks/useClasses';
import PopularClassCart from './PopulerClassCart';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    const [classes] = useClasses();
    // console.log(classes);
    useEffect(() => {
        if (classes.length > 0) {

            const sortedClasses = classes.sort(
                (a, b) => b.students - a.students
            );

            setPopularClasses(sortedClasses.slice(0, 6))
        }
    }, [classes])
    // console.log(popularClasses);
    return (
        <div className='py-20'>
            <h2 className=' text-2xl text-slate-900 text-center'>Popular Classes</h2>
            <div className=' grid lg:grid-cols-3 gap-6 lg:px-36 pt-10'  >
                {
                    popularClasses.map(singleClass => <PopularClassCart
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassCart>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;
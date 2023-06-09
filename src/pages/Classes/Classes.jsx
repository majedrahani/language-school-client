import React from 'react';
import useClasses from '../../Hooks/useClasses';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import classesImg from '../../assets/classes-img.png'
import ClassesCart from './ClassesCart';

const Classes = () => {
    const [classes] = useClasses();
    // console.log(classes);

    return (
        <div className=' pt-28'>
            <Helmet>
                <title> Classes | Language Academy</title>
            </Helmet>
            <Cover img={classesImg} title="Classes"></Cover>
            <div className=' my-10'>
                <h2 className=' text-2xl text-slate-900 text-center mb-10'>All Classes</h2>
                <div className=' grid lg:grid-cols-3 gap-5 lg:px-28 '>
                    {
                        classes.map(singleClass => <ClassesCart
                            key={singleClass._id}
                            singleClass={singleClass}
                        ></ClassesCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;
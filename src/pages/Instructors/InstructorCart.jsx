import React from 'react';

const InstructorCart = ({ singleInstructor }) => {
    console.log(singleInstructor);
    const { name, image, email, classes_taken, class_names } = singleInstructor;
    return (
        <div>
            <div className="card card-compact h-full  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body line-clamp-none">
                    <h2 className="card-title mb-0">{name}</h2>
                    <p className=' mt-0'><span className=' font-bold text-[#01A2A6]'>Email :</span> {email}</p>
                    <p className=' font-bold text-[#01A2A6]'>Classes Taken : {classes_taken}</p>
                    <p className=' font-bold text-[#01A2A6]'>Class Names : </p>
                    {
                        class_names.map(className => <li className=' pl-5'>{className}</li>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;
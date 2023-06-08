import React from 'react';

const ClassesCart = ({ singleClass }) => {
    console.log(singleClass);
    const { students, price, name, instructor_name, image, available_seats } = singleClass;
    return (
        <div>
            <div className="card card-compact h-full rounded-none  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body line-clamp-none">
                    <h2 className="card-title mb-0">{name}</h2>
                    <p className=' mt-0'><span className=' font-bold text-[#01A2A6]'>Instructor :</span> {instructor_name}</p>
                    <div className=' flex justify-between'>
                        <p className=' font-bold text-[#01A2A6]'>Students : {students}</p>
                        <p className=' font-bold text-[#01A2A6]'>Price : ${price}</p>
                    </div>
                    <p className=' font-bold text-[#01A2A6]'>Available Seats :
                        <span className={`${available_seats>0 ? "ml-2 px-3 bg-amber-100 rounded" : "bg-red-500 text-white ml-2 rounded px-3"}`}>
                            {available_seats}
                        </span></p>


                </div>
            </div>
        </div>
    );
};

export default ClassesCart;
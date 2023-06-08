import React from 'react';

const PopularClassCart = ({ singleClass }) => {
    // console.log(singleClass);
    const { students, name, image } = singleClass;
    return (
        <div>
            <div className="card card-compact h-full rounded-none bg-base-100 shadow">
                <figure><img src={image} alt="class image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Students : {students}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularClassCart;
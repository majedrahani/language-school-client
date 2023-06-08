import React, { useRef, useState } from "react";


const PInstructorsCart = ({ instructor }) => {
    console.log(instructor);
    const { classes_taken, name, image } = instructor;
    return (
        <div>
            <div className="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Classes Taken : {classes_taken}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default PInstructorsCart;
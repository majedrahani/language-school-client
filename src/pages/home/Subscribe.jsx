import React from 'react';

const Subscribe = () => {
    return (
        <div className=' w-full bg-[#dafbfc] p-8 lg:p-20'>
            <h2 className=' text-center text-2xl text-gray-900'>Subscribe Email</h2>
            <div className='flex justify-center'>
                <div className="form-control ">
                    
                    <label className="input-group my-10">
                        <span className='bg-[#01A2A6]'>Email</span>
                        <input type="text"  className="input input-bordered border-[#01A2A6]" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
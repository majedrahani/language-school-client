import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const img_hosting_token = import.meta.env.VITE_img_upload_token;
const AddClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    console.log(img_hosting_token);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { class_name: name, price, instructor_name, email,available_seats,students,image } = data;
                    const newClass = { name, price: parseFloat(price), instructor_name, email,available_seats,students, image: imgURL }
                    console.log(newClass)
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('added new class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-[#dafbfc] mx-4 lg:mx-20 my-10 p-4 lg:p-20'>
                <h2 className=' text-2xl text-slate-900 text-center mb-10'>Add a Class</h2>
                <input
                    {...register("class_name", { required: true, maxLength: 120 })}
                    type="text" placeholder="Class name" className="input w-full rounded-sm mb-4 " />

                <input
                    {...register("instructor_name", { required: true, maxLength: 120 })}
                    defaultValue={user?.displayName}
                    type="text" placeholder="Instructor name" className="input w-full rounded-sm mb-4 " />
                <input
                    {...register("email", { required: true, maxLength: 120 })}
                    defaultValue={user?.email}
                    type="text" placeholder="Instructor email" className="input w-full rounded-sm mb-4 " />



                <input
                    {...register("available_seats", { required: true, maxLength: 120 })}
                    type="number" placeholder="Available seats" className="input w-full rounded-sm mb-4 " />
                <input
                    {...register("students", { required: true, maxLength: 120 })}
                    type="number" placeholder="Students count" className="input w-full rounded-sm mb-4 " />
                <input
                    {...register("price", { required: true, maxLength: 120 })}
                    type="number" placeholder="$Price" className="input w-full rounded-sm mb-4 " />
                <input
                    {...register("image", { required: true })}
                    type="file" className="file-input file-input-bordered file-input-sm  border-[#01A2A6] w-full rounded-sm mb-4 " />
                <button className=' btn bg-[#01A2A6] rounded-sm w-full text-white'>Add Class</button>

            </form>
        </div>
    );
};

export default AddClasses;
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AddDestinations = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        fetch('http://localhost:5000/adddestinations/', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully Added The New Tour Destination");
                    reset();
                }
            })
    }
    return (
        <div className="mt-28">
            <h1 className="mt-8 text-center font-serif text-4xl font-bold">Add a Tour Destination</h1>
            <hr className="w-2/5 mx-auto mt-10" />
            <section className="mt-10 my-auto w-1/2 mx-auto">
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <input className="border p-2 mx-auto border-gray-400 w-full h-10" placeholder="Tour Name"  {...register("name", { required: true })} />
                    <input placeholder="Image Link" className="border p-2 mx-auto border-gray-400 w-full h-10"  {...register("img", { required: true })} />
                    <input placeholder="Location" className="border p-2 mx-auto border-gray-400 w-full h-10"  {...register("location", { required: true })} />
                    <input type="number" placeholder="Price Per Night " className="border p-2 mx-auto border-gray-400 w-full h-10"  {...register("price", { required: true })} />
                    <textarea placeholder="Description" className="border p-2 mx-auto border-gray-400 w-full h-20"  {...register("details", { required: true })} />

                    <input className="border mx-auto hover:shadow-lg bg-yellow-500 text-white w-full h-10" type="submit" value="Add Tour Destination" />
                </form>
            </section>
        </div>
    );
};

export default AddDestinations;
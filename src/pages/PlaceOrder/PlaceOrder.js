import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const id = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();

    const [destination, setDestination] = useState({});
    const uri = `http://localhost:5000/destinations/${id.id}`;

    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])
    //Handle Confirm Booking
    const onSubmit = data => {
        data.order = destination._id;
        data.status = "pending";
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your Order is Confirmed. Thank You");
                    history.push('/myorders');
                }
            })
    };
    return (
        <div >
            <h1 className="mt-8 text-center font-serif text-4xl font-bold">Book Your Order</h1>
            <hr className="w-1/3 mx-auto mt-10" />
            <div className="mr-8 flex">
                <section className="w-2/5 my-24 ">
                    <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <input className="border p-2 mx-auto border-gray-400 w-80 h-10" placeholder="Name" defaultValue={user?.displayName} {...register("name")} />
                        <input placeholder="Email" className="border p-2 mx-auto border-gray-400 w-80 h-10" defaultValue={user?.email} {...register("email", { required: true })} />
                        <input placeholder="Address" className="border p-2 mx-auto border-gray-400 w-80 h-10" defaultValue="" {...register("adress", { required: true })} />
                        <input placeholder="Phone Number " className="border p-2 mx-auto border-gray-400 w-80 h-10" defaultValue="" {...register("phoneNumber")} />

                        <input className="border mx-auto hover:shadow-lg bg-yellow-400 text-white w-80 h-10" type="submit" value="Confirm Booking" />
                    </form>
                </section>

                <section className="w-3/5 flex my-auto">
                    <div>
                        <img className="rounded-md" src={destination.img} alt="" />
                    </div>
                    <article className="my-auto space-y-4 pl-8">
                        <h1 className="font-bold text-2xl font-mono">{destination.name}</h1>
                        <h1 className="font-bold text-yellow-500 text-xl font-mono">${destination.price} /Night</h1>
                        <p className="font-serif">{destination.details}</p>
                        <p className="font-serif text-sm"><i class="fas fa-map-marker"></i> {destination.location}</p>
                    </article>

                </section>
            </div>
        </div>
    );
};

export default PlaceOrder;
import React, { Children } from 'react';

const EachOrder = (props) => {
    const { img, name, price, details, _id, location } = props.myorder;
    console.log(props.children);
    return (
        <div>
            <div className="flex">

                <article className="my-auto space-y-4  w-1/2">
                    <h1 className="font-bold text-2xl font-mono">{name}</h1>
                    <h1 className="font-bold text-yellow-500 text-xl font-mono">${price} /Night</h1>
                    {props.children}

                    <p className="font-serif text-sm"><i class="fas fa-map-marker"></i> {location}</p>
                    <button className="py-2 px-4 border border-white bg-red-400 hover:bg-red-600 text-white rounded-lg">Remove Booking</button>

                </article>
                <div className=" w-1/2">
                    <img className={props.cl == "all" ? "rounded-lg mx-auto my-auto w-3/4" : "rounded-lg mx-auto my-auto w-3/5"} src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default EachOrder;
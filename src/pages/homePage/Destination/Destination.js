import React from 'react';

const Destination = (props) => {
    const { name, img, price, details, _id, location } = props.destination;
    return (
        <div>
            <section>
                <img src={img} alt="" />
            </section>
            <article className="font-serif space-y-4 mt-4 px-2">
                <div className="flex" >
                    <h4 className="text-xl w-5/9 font-semibold">{name}</h4>
                    <h4 className=" text-yellow-400 ml-auto">${price} /night</h4>
                </div>
                <h4 className="text-xs font-light "><i class="fas fa-map-marker"></i> {location}</h4>
                <h4 className="text-gray-700">{details.slice(0, 100)}...</h4>
                <div className="text-center ">
                    <button className="text-center px-6 py-2 text-yellow-400 hover:bg-yellow-300 hover:text-white border-gray-400 border">Book Now</button>
                </div>
            </article>

        </div>
    );
};

export default Destination;
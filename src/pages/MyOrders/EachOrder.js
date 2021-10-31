import React, { Children } from 'react';

const EachOrder = (props) => {
    const { img, name, price, details, status, _id, location } = props.myorder;
    const { userName } = props;
    // console.log(props.children);
    const handleRemoveBooking = () => {
        const proceed = window.confirm("Remove the order?")
        if (proceed) {
            fetch(`https://howling-dracula-23278.herokuapp.com/allorders?id=${_id}&&customerName=${userName}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.location.reload();
                    }
                })
        }
    }
    return (
        <div>
            <div className="md:flex flex flex-col md:flex-row">

                <article className="my-auto order-2 md:order-1 space-y-4  md:w-1/2">
                    <h1 className="font-bold text-2xl font-mono">{name}</h1>
                    <h1 className="font-bold text-yellow-500 text-xl font-mono">${price} /Night</h1>
                    {
                        status === "pending" ?
                            <h3>Status: <span className="text-red-500 font-semibold" >Pending</span> </h3>
                            :
                            <h3>Status: <span className="text-green-600 font-semibold" >Approved</span> </h3>
                    }
                    {props.children}

                    <p className="font-serif text-sm"><i class="fas fa-map-marker"></i> {location}</p>
                    <button onClick={handleRemoveBooking} className="py-2 px-4 border border-white bg-red-400 hover:bg-red-600 text-white rounded-lg">Remove Booking</button>

                </article>
                <div className="order-1 md:order-2 md:w-1/2 mb-4 md:mb-0">
                    <img className={props.cl == "all" ? "rounded-lg mx-auto my-auto md:w-2/4" : "rounded-lg mx-auto my-auto md:w-3/5"} src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default EachOrder;
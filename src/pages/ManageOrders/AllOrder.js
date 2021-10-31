import React from 'react';

const AllOrder = (props) => {
    const { img, name, price, _id, location, orderedBy, status } = props.myorder;
    console.log(props.children);
    const handleApproveBooking = () => {
        const proceed = window.confirm("Approve the order?")
        if (proceed) {
            fetch('https://howling-dracula-23278.herokuapp.com/allorders', {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ _id, orderedBy })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        window.location.reload();
                    }
                })
        }
    }
    const handleRemoveBooking = () => {
        const proceed = window.confirm("Remove the order?")
        if (proceed) {
            fetch(`https://howling-dracula-23278.herokuapp.com/allorders?id=${_id}&&customerName=${orderedBy}`, {
                method: "DELETE",
                body: JSON.stringify({ _id, orderedBy })
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
            <div className="flex flex-col md:flex-row">

                <article className="my-auto space-y-4 order-2 md:order-1 mt-4 md:mt-0  md:w-1/2">
                    <h1 className="font-bold text-2xl font-mono">{name}</h1>
                    <h1 className="font-bold text-yellow-500 text-xl font-mono">${price} /Night</h1>
                    {
                        status === "pending" ?
                            <h3>Status: <span className="text-red-500 font-semibold" >Pending</span> </h3>
                            :
                            <h3>Status: <span className="text-green-600 font-semibold" >Approved</span> </h3>
                    }
                    <h3 className="font-semibold"><span className="font-thin">Booked By: </span>{orderedBy}</h3>

                    <p className="font-serif text-sm"><i class="fas fa-map-marker"></i> {location}</p>
                    <button onClick={handleRemoveBooking} className="py-2 px-4 border border-white bg-red-400 hover:bg-red-600 text-white rounded-lg">Remove Booking</button>
                    {
                        status === "pending" && <button onClick={handleApproveBooking} className="py-2 px-4 border md:ml-16 border-white bg-green-600 hover:bg-green-900 text-white rounded-lg">Approve Booking</button>
                    }

                </article>
                <div className="order-1 md:order-2 md:w-1/2">
                    <img className={props.cl === "all" ? "rounded-lg mx-auto my-auto md:w-3/4" : "rounded-lg mx-auto my-auto md:w-3/5"} src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AllOrder;
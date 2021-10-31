import React, { useEffect, useState } from 'react';
import EachOrder from '../MyOrders/EachOrder';
import AllOrder from './AllOrder';

const ManageOrders = () => {
    const [allorders, setAllorders] = useState([]);
    const [ordersLoading, setordersLoading] = useState(true);
    useEffect(() => {
        fetch('https://howling-dracula-23278.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => {
                setAllorders(data);
                setordersLoading(false)
            });
    }, [])
    if (ordersLoading) {

        return (<div className="my-48 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>)
    }
    else if (allorders.length === 0) {
        return <div className="my-96"><h3 className="text-5xl text-center  font-mono mt-8 mb-4" >Currently No Booking</h3></div>
    }
    return (
        <div className="mt-28 mb-20">
            <h3 className="text-3xl text-center font-mono my-8" >Manage All Bookings</h3>
            <hr className="w-1/3 mx-auto mb-16" />
            <div className="grid grid-cols-1 gap-20 mx-6 md:mx-40">
                {
                    allorders.map(od => <AllOrder
                        key={od._id}
                        myorder={od}>

                    </AllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;
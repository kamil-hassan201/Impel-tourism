import React, { useEffect, useState } from 'react';
import EachOrder from '../MyOrders/EachOrder';

const ManageOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setAllorders(data));
    }, [])
    console.log(allorders)
    return (
        <div>
            <h3 className="text-3xl text-center font-mono my-8" >Manage All Bookings</h3>
            <hr className="w-1/3 mx-auto mb-16" />
            <div className="grid grid-cols-1 gap-20 mx-40">
                {
                    allorders.map(od => <EachOrder key={od._id} myorder={od}>
                        <h3>Booked By: {od.orderedBy}</h3>
                    </EachOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;
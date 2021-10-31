import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import EachOrder from './EachOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myorders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => setMyorders(data));
    }, [])
    console.log(myorders);
    return (
        <div>
            <h3 className="text-3xl text-center font-mono my-8" >My Bookings</h3>
            <hr className="w-1/4 mx-auto mb-8" />
            <div className="grid grid-cols-1 gap-20 mx-40">
                {
                    myorders.map(mo => <EachOrder key={mo._id} cl="all" myorder={mo}>
                        <p className="font-serif">{mo.details}</p>
                    </EachOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
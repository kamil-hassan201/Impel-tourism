import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import EachOrder from './EachOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);
    const [myordersLoading, setMyordersLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/myorders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                setMyorders(data);
                setMyordersLoading(false);
            });
    }, [])
    if (myordersLoading) {
        return (<div className="my-48 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        </div>)
    }
    return (
        <div className="mt-28 mb-20">
            <h3 className="text-3xl text-center font-mono mt-8 mb-4" >My Bookings</h3>
            <p className="text-center mb-4 text-yellow-500"><small>{user?.displayName?.toUpperCase()}</small></p>
            <hr className="w-1/4 mx-auto mb-8" />
            <div className="grid grid-cols-1 gap-20 mx-40">
                {
                    myorders.map(mo => <EachOrder key={mo._id} cl="all" userName={user.displayName} myorder={mo}>
                        <p className="font-serif">{mo.details}</p>
                    </EachOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
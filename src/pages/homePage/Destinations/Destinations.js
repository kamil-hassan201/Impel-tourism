import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, [])
    return (
        <div id="destinations" className="my-28">
            <h3 className="text-3xl text-center font-mono my-8" >Top Destinations</h3>
            <hr className="w-1/4 mx-auto mb-8" />

            <section className="grid grid-cols-3 gap-12 mx-20">
                {
                    destinations.map(d => <Destination
                        key={d._id}
                        destination={d}
                    ></Destination>)
                }
            </section>
        </div>
    );
};

export default Destinations;
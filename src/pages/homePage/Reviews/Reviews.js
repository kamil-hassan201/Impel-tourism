import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://howling-dracula-23278.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div id="reviews" >
            <h3 className="text-3xl text-center font-mono my-8" >Cutomer Reviews</h3>
            <hr className="w-1/4 mx-auto mb-8" />
            <section className="grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-40 gap-40">
                {
                    reviews.map(r => <Review
                        key={r._id}
                        review={r}
                    ></Review>)
                }
            </section>
        </div>
    );
};

export default Reviews;
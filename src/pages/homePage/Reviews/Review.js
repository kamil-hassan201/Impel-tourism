import React from 'react';

const Review = (props) => {
    const { Name, img, comment } = props.review;
    return (
        <div>
            <div className="text-center">
                <img className="rounded-full mx-auto" src={img} alt="" />
            </div>
            <article>
                <h5 className="text-yellow-500 my-7 text-center text-xl">{Name}</h5>
                <p className="text-gray-500 text-center font-light">{comment}</p>
            </article>
        </div>
    );
};

export default Review;
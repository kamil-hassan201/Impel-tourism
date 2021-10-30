import React from 'react';
import img1 from '../../../images/guide1.jpeg';
import img2 from '../../../images/guide2.jpeg';
import img3 from '../../../images/guide3.jpeg';
import img4 from '../../../images/guide4.jpeg';

const Guides = () => {
    return (
        <div id="destinations" className="my-28">
            <h3 className="text-3xl text-center font-mono my-8" >Our Guides</h3>
            <hr className="w-1/4 mx-auto mb-8" />
            <section className="grid grid-cols-1 md:grid-cols-4 gap-28 mx-24">
                <div>
                    <div>
                        <img className="rounded-full" src={img1} alt="" />
                    </div>
                    <article className="space-y-3 text-center mt-4">
                        <h5 className="text-yellow-500 font-light font-serif">Argentine Guide</h5>
                        <h3 className="text-2xl font-medium font-serif">Kamil Hassan</h3>
                        <p className="text-sm font-extralight">Kamil Hassan is our tour guide of Argentina. He is well known of the tourist places in Argentina. He is quite friendly and helpful.</p>
                    </article>
                </div>
                <div>
                    <div>
                        <img className="rounded-full" src={img2} alt="" />
                    </div>
                    <article className="space-y-3 text-center mt-4">
                        <h5 className="text-yellow-500 font-light font-serif">Peru Guide</h5>
                        <h3 className="text-2xl font-medium font-serif">Reshad Mollik</h3>
                        <p className="text-sm font-extralight">Mollik is our tour guide of Peru. He is well known of the tourist places in Peru. He is quite friendly and helpful.</p>
                    </article>
                </div>
                <div>
                    <div>
                        <img className="rounded-full" src={img3} alt="" />
                    </div>
                    <article className="space-y-3 text-center mt-4">
                        <h5 className="text-yellow-500 font-light font-serif">Miami Guide</h5>
                        <h3 className="text-2xl font-medium font-serif">Labiba Mehzabin</h3>
                        <p className="text-sm font-extralight">Mehzabin is our tour guide of Miami. He is well known of the tourist places in Miami. He is quite friendly and helpful.</p>
                    </article>
                </div>
                <div>
                    <div>
                        <img className="rounded-full" src={img4} alt="" />
                    </div>
                    <article className="space-y-3 text-center mt-4">
                        <h5 className="text-yellow-500 font-light font-serif">Maldives Guide</h5>
                        <h3 className="text-2xl font-medium font-serif">Fateme Zohra</h3>
                        <p className="text-sm font-extralight">She is our tour guide of Maldives. He is well known of the tourist places in Maldives. He is quite friendly and helpful.</p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Guides;
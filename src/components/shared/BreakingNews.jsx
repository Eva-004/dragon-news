import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-gray-100 flex justify-between gap-4 py-4 px-2 container mx-auto'>
            <button className='btn bg-pink-800 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, reiciendis. Blanditiis aspernatur error totam odit.
            </Marquee>
        </div>
    );
};

export default BreakingNews;
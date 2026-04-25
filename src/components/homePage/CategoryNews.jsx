import Image from 'next/image';
import React from 'react';
import NewsCard from './NewsCard';

const CategoryNews = ({ news }) => {
    return (
        <div className='col-span-6'>
            <h2 className='font-semibold text-xl mb-3'>Dragon News</h2>
            <div className='space-y-4'>
                {
                  news.length > 0 ?  news.map(n =>
                 <NewsCard key={n._id} news={n}></NewsCard>) :
                  <h2 className='font-bold text-2xl text-pink-700 flex items-center justify-center'>No News Found</h2>
                }
            </div>
        </div>
    );
};

export default CategoryNews;
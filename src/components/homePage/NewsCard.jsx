import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <figure className='my-4'>
                    <Image
                        src={news.image_url}
                        width={300}
                        height={300}
                        alt={news.title} className='w-full' />
                </figure>
                <p className='line-clamp-3 text-[#706F6F]'>{news.details}</p>
                <Link href={`/news/${news._id}`} className='text-left  font-semibold text-[#f99b44]'>Read More</Link>
            </div>
        </div>
    );
};

export default NewsCard;
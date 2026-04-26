import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className='flex justify-between items-center gap-4 p-4 bg-slate-100'>
                                        <div className='flex justify-between items-center gap-4'>
                                            <div >
                                            <Image src={news.author.img} alt={news.author.name} width={40} height={40} className='rounded-full'/>
                                            </div>
                                          <div>
                                            <h3 className='font-bold text-xl'>{news.author.name}</h3>
                                            <p>{news.author.published_date}</p>
                                           </div>
                                        </div>
                                        <div className='flex justify-between items-center gap-4 '>
                                            <CiBookmark className='text-2xl'/>
                                            <CiShare2 className='text-2xl'/>
                                        </div>
                                    </div>
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
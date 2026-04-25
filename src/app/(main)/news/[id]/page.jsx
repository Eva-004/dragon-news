import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetails(id);
    console.log(news)
    return (
        <div className='container mx-auto'>
           <h2 className='font-semibold text-xl mb-3'>Dragon News</h2>
           <div>
             {
                news.map(n => <div key={n._id} className="card bg-base-100  shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{n.title}</h2>
                            <figure className='my-4'>
                                <Image
                                    src={n.image_url}
                                    width={300}
                                    height={300}
                                    alt={n.title} className='w-full' />
                            </figure>
                            <p className=' text-[#706F6F]'>{n.details}</p>
                        
                        </div>
                    </div>)
             }
           </div>
        </div>
    );
};

export default NewsDetailsPage;
import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetails(id);
    console.log(news)
    return (
        <div className='container mx-auto my-10'>
            <h2 className='font-semibold text-xl mb-3'>Dragon News</h2>
            <div>
                {
                    news.map(n => <div key={n._id} className="card bg-base-100  shadow-sm">
                        <div className='flex justify-between items-center gap-4 p-4 bg-slate-100'>
                            <div className='flex justify-between items-center gap-4'>
                                <div >
                                <Image src={n.author.img} alt={n.author.name} width={40} height={40} className='rounded-full'/>
                                </div>
                              <div>
                                <h3 className='font-bold text-xl'>{n.author.name}</h3>
                                <p>{n.author.published_date}</p>
                               </div>
                            </div>
                            <div className='flex justify-between items-center gap-4 '>
                                <CiBookmark className='text-2xl'/>
                                <CiShare2 className='text-2xl'/>
                            </div>
                        </div>
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
                          <button className='btn w-80 bg-[#D72050] text-white mt-4'>
                            <Link href={`/category/${n.category_id}`}   className='flex gap-2 justify-between items-center'><FaArrowLeft /> All news in this category</Link>
                        </button>
                        </div>
                        
                    </div>)
                }

            </div>
        </div>
    );
};

export default NewsDetailsPage;

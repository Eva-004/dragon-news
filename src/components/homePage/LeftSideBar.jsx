import Link from 'next/link';
import React from 'react';


const LeftSideBar = ({categories, activeId}) => {
    return (
        <div className='col-span-3'>
           <h2 className='font-semibold text-xl mb-3'>All Category</h2>
           <ul className='flex flex-col gap-2'>
            {
                categories.news_category.map(category =><li  key={category.category_id} className={`${activeId === category.category_id && 'bg-slate-200 '} py-2 rounded-sm text-center`}>
                    <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link>
                </li>
                )
            }
           </ul>
        </div>
    );
};

export default LeftSideBar;
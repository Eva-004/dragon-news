import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='text-center my-40'>
            <div>
                <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-6"> Page not found </p>
            <Link  href={"/"} className="px-5 py-2 border border-gray-800 rounded-full text-sm hover:bg-gray-800 hover:text-white transition"> Go to Home
           </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
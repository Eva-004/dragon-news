import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div className='col-span-3'>
           <h2 className='font-semibold text-xl mb-3'>Login With</h2>
           <div className='space-y-2 '>
            <button className='btn  border-blue-400 text-blue-400 flex justify-between items-center gap-2'>
                <FaGoogle />
                <p>Login with Google</p>
            </button>
            <button className='btn border-red-400 text-red-400 flex justify-between items-center gap-2'>
                <FaGithub />
                  <p>Login with Google</p>
            </button>
           </div>
        </div>
    );
};

export default RightSideBar;
import React from 'react';
import NavLink from './NavLink';
import user from '@/assets/user.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=' flex justify-between container mx-auto mt-6 items-center' >
           <div></div>
           <ul className='flex gap-4 text-gray-600 text-lg'>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/about-us'}>About</NavLink></li>
            <li><NavLink href={'/career'}>Career</NavLink></li>
           </ul>
           <div className='flex justify-between gap-4 items-center'>
            <Image src={user} alt='user' width={40} height={40}/>
            <button className="btn bg-gray-600 text-white"><Link href={'/login'}>Login</Link></button>
           </div>
        </div>
    );
};

export default Navbar;
'use client'
import React from 'react';
import NavLink from './NavLink';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user)

    return (
        <div className=' flex justify-between container mx-auto mt-6 items-center' >
           <div></div>
           <ul className='flex gap-4 text-gray-600 text-lg'>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/about-us'}>About</NavLink></li>
            <li  className="text-yellow-600"><NavLink href={'/career'}>Career</NavLink></li>
           </ul>
           { isPending ? (<span className="loading loading-spinner loading-lg"></span> ): user ? 
            (<div className='flex justify-between gap-4 items-center'>
                <h2 className='font-bold text-xl'>{user?.name}</h2>
            <Image src={user?.image} alt='user' width={40} height={40}/>
            <button className="btn bg-gray-600 text-white " onClick={async()=> await authClient.signOut()}>LogOut</button>
           </div>)
           : (
             (
            (<div className='flex justify-between gap-4 items-center'>
            <Image src={avatar} alt='user' width={40} height={40}/>
            <button className="btn bg-gray-600 text-white" ><Link href={'/login'}>Login</Link></button>
           </div>)
           )
           )
           }
        </div>
    );
};

export default Navbar;
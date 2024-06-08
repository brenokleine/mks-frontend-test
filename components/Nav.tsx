'use client'
import React from 'react';
import { ShoppingCart } from '@blueprintjs/icons';

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
    return (
        <div className='w-full bg-[#0f52ba] flex justify-between p-4'>
            <div className='flex justify-center items-center gap-2 ml-6'>
                <h1 className='text-white text-2xl font-medium'>
                    MKS
                </h1>
                <h2 className='text-white text-md font-thin'>
                    Sistemas
                </h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button className='bg-white rounded-md p-3 flex gap-3 justify-center items-center text-xs mr-6'>
                    <ShoppingCart color='black' />
                    <p className='font-bold'>
                        0
                    </p>
                </button>
            </div>
        </div>
    );
}

export default Nav;
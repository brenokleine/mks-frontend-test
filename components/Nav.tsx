'use client'
import React from 'react';
import { ShoppingCart } from '@blueprintjs/icons';
import { Drawer } from '@mui/material';


type NavProps = {};

const Nav: React.FC<NavProps> = () => {

    const [cartOpen, setCartOpen] = React.useState<boolean>(false);


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
                <button 
                    className='bg-white rounded-md p-3 flex gap-3 justify-center items-center text-xs mr-6'
                    onClick={() => {setCartOpen(true)}}
                >
                    <ShoppingCart color='black' />
                    <p className='font-bold'>
                        {/* {totalItems} */}
                    </p>
                </button>
            </div>

            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => {setCartOpen(false)}}
                sx={{ '& .MuiDrawer-paper': { width: '30rem', backgroundColor: '#0f52ba' } }}
            >
                <div className='flex flex-nowrap items-center justify-between p-8'>
                    <h1 className='text-white text-3xl font-semibold'>
                        Carrinho de compras
                    </h1>
                    <button className='bg-black text-white' style={{ width: '35px', height: '35px', borderRadius: '50%' }}>
                        X
                    </button>
                </div>
                <div className='p-8 pt-0'>

                </div>
                <div className='mt-auto'>
                    <div className='text-2xl text-white font-semibold flex justify-between p-8 pl-12 pr-12'>
                        <p>
                            Total:
                        </p>
                        <p>
                            R$0
                        </p>
                    </div>
                    <button className='bg-black text-white text-2xl font-semibold w-full p-6'>
                        Finalizar compra
                    </button>
                </div>
            </Drawer>

        </div>
    );
}

export default Nav;
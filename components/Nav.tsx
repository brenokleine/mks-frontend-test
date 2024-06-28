'use client'
import React from 'react';
import { ShoppingCart } from '@blueprintjs/icons';
import { Drawer } from '@mui/material';
import { useCart } from '@/contexts/CartContext';
import { colors } from '@/styles/colors';
import ItemTile from './ItemTile';
import { formatNumber } from '@/public/utils/formatNumber';
import { Delete, Trash } from '@blueprintjs/icons'


type NavProps = {};

const Nav: React.FC<NavProps> = () => {

    const [cartOpen, setCartOpen] = React.useState<boolean>(false);

    const { cartCount, totalAmount, cart, clearCart } = useCart();

    return (
        <div className='w-full bg-primary flex justify-between p-4'>
            <div className='flex justify-center items-center gap-2 ml-6'>
                <h1 className='text-white text-2xl font-medium'>
                    Bernstein
                </h1>
                <h2 className='text-white text-md font-thin'>
                    &Co.
                </h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button 
                    className='bg-white rounded-md p-3 flex gap-3 justify-center items-center text-xs mr-6'
                    onClick={() => {setCartOpen(true)}}
                >
                    <ShoppingCart color='black' />
                    <p className='font-bold'>
                        {cartCount}
                    </p>
                </button>
            </div>

            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => {setCartOpen(false)}}
                sx={{ '& .MuiDrawer-paper': { width: '30rem', backgroundColor: colors.primary } }}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-nowrap items-center justify-between p-8'>
                        <h1 className='text-white text-3xl font-semibold'>
                            Carrinho de compras
                        </h1>
                        <button
                            onClick={() => {setCartOpen(false)}}
                        >
                            <Delete
                                color='white'
                                size={20}
                            />
                        </button>
                    </div>
                    <div className='flex items-center w-full font-semibold p-4 pl-8 pr-8 pt-0  text-white'>
                        <button 
                            className='flex items-center justify-center gap-2 cursor-pointer rounded-lg p-1 hover:bg-white hover:text-black transition duration-100 ease-in-out'
                            onClick={() => { clearCart() }}    
                        >
                            <div>
                                <Trash
                                    color='red'
                                    size={16}
                                />
                            </div>
                            Clear Cart
                        </button>
                    </div>
                </div>
                <div className=' flex flex-col gap-3 p-8 pt-0'>
                    {cart.map((product) => (
                        <ItemTile key={product.id} product={product} />
                    ))}
                </div>
                <div className='mt-auto'>
                    <div className='text-2xl text-white font-semibold flex justify-between p-8 pl-12 pr-12'>
                        <p>
                            Total:
                        </p>
                        <p>
                            R$ {formatNumber(totalAmount.toString())}
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
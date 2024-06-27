'use client'
import React from 'react';
import Image from 'next/image'
import { formatNumber } from '@/public/utils/formatNumber';
import { Add, Remove } from '@blueprintjs/icons'
import { useCart } from '@/contexts/CartContext';

interface ItemTileProps {
    product: {
        id: number;
        name: string;
        price: number;
        amount: number;
        image: string;
    };
}

const ItemTile: React.FC<ItemTileProps> = ({ product }) => {

    const { cart, addToCart, removeFromCart } = useCart();

    return (
        <div key={product.id} className='flex p-4 bg-white justify-between rounded-xl text-black'>
            <div className='flex flex-col gap-3 justify-between'>
                <p className='text-lg w-2/3 font-semibold'>
                    {product.name}
                </p>
                <p className='text-md bg-zinc-700 text-white rounded-md p-1 pl-2 pr-2 font-bold self-start'>
                    R$ {formatNumber(product.price.toString())}
                </p>
            </div>
            <div className='flex flex-col items-center justify-between p-5 gap-3'>
                <Image
                    src={product.image ? product.image : '/assets/images/missing_image.png'}
                    alt={product.name}
                    width={65}
                    height={65}
                />
                <div className='flex gap-2 justify-center items-center text-black cursor-pointer'>
                    <Add
                        color='green'
                        onClick={() => {addToCart(product)}}
                    />
                    <p className='text-lg font-semibold'>
                        {product.amount}
                    </p>
                    <Remove
                        color='red'
                        onClick={() => { removeFromCart(product.id) }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemTile;

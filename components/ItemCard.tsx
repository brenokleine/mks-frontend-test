'use client'
import React from 'react';
import { ShoppingCart } from '@blueprintjs/icons';
import Image from 'next/image'
import Button from './Button';
import { useCart } from '@/contexts/CartContext';
import { formatNumber } from '@/public/utils/formatNumber';

interface ItemCardProps {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, title, description, price, image }) => {

    const { cart, addToCart, cartCount, totalAmount } = useCart();

    const handleBuyClick = () => {
        const product = {
            id,
            name: title,
            price: parseFloat(price),
            amount: 1,
            image: image
        };

        addToCart(product);
    };
    
    
    return(
        <div className="bg-white rounded-xl shadow-md w-[260px] flex flex-col">
            <div className='p-3'>
                <div className='w-full flex justify-center p-7'>
                    <Image
                        src={image ? image : '/assets/images/missing_image.png'}
                        alt={title}
                        width={120}
                        height={120} />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-nowrap justify-around gap-3 pb-4'>
                        <h1 className='text-xl flex-1'>
                            {title}
                        </h1>
                        <h2 className=' bg-zinc-700 text-white rounded-md p-1 pl-2 pr-2 font-bold self-start'>
                            R${formatNumber(price)}
                        </h2>
                    </div>
                    <p className='text-sm text-zinc-500 font-light'>
                        {description}
                    </p>
                </div>
            </div>
            <Button 
                default
                onClick={() => { handleBuyClick() }}
            >
                <ShoppingCart color='white' size={20} />
                <p className='text-white'>
                    COMPRAR
                </p>
            </Button>
        </div>
    )
}

export default ItemCard;
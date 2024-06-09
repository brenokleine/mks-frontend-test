'use client'
import React from 'react';
import { ShoppingCart } from '@blueprintjs/icons';
import Image from 'next/image'
import Button from './Button';

interface ItemCardProps {
    key: number;
    id: number;
    name: string;
    brand: string;
    description: string;
    price: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, brand, description, price }) => {

    const handleBuyClick = () => {
       
    };
    
    const formatNumber = (num: string): string  => {
        const parsedNum = parseFloat(num);

        if (isNaN(parsedNum)) {
            throw new TypeError('input should be a number or a string that can be parsed to a number');
        }

        if (Number.isInteger(parsedNum)) {
            return parsedNum.toString();
        } else {
            return parsedNum.toFixed(2).replace(/\.00$/, '');
        }
    }
    
    return(
        <div className="bg-white rounded-xl shadow-md w-[260px] flex flex-col">
            <div className='p-3'>
                <div className='w-full flex justify-center'>
                    <Image
                        src='/assets/images/missing_image.png'
                        alt={name}
                        width={150}
                        height={150} />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-nowrap justify-around gap-3 pb-4'>
                        <h1 className='text-xl flex-1'>
                            {name}
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
'use client'
import React, { useState } from 'react';
import { ShoppingCart } from '@blueprintjs/icons';
import Image from 'next/image'
import Button from './Button';
import { useCart } from '@/contexts/CartContext';
import { formatNumber } from '@/public/utils/formatNumber';
import { Alert, Snackbar } from '@mui/material';

interface ItemCardProps {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, title, description, price, image }) => {

    const { addToCart } = useCart();

    const handleBuyClick = () => {
        const product = {
            id,
            name: title,
            price: parseFloat(price),
            amount: 1,
            image: image,
            description: description
        };

        addToCart(product);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
        
    }

    const handleOpen = () => {
        setIsOpen(true);
    }


    
    
    return(
        <div className="bg-white rounded-xl shadow-md w-[260px] flex flex-col">
            <div className='p-3'>
                <div className='w-full h-[220px] flex justify-center p-7'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={image ? image : '/assets/images/missing_image.png'}
                            alt={title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-nowrap justify-around gap-3 pb-4'>
                        <h1 className='text-xl flex-1'>
                            {title.length > 40 ? title.slice(0, 40) + '...' : title}
                        </h1>
                        <h2 className=' bg-zinc-700 text-white rounded-md p-1 pl-2 pr-2 font-bold self-start'>
                            R${formatNumber(price)}
                        </h2>
                    </div>
                    <p className='text-sm text-zinc-500 font-light'>
                        {description.slice(0, 100) + '...'}
                    </p>
                </div>
            </div>
            <Button 
                default
                onClick={() => { handleBuyClick(); handleOpen(); }}
            >
                <ShoppingCart color='white' size={20} />
                <p className='text-white'>
                    COMPRAR
                </p>
            </Button>
            <Snackbar
                open={isOpen}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%', color: 'white'}}
                >
                    Item adicionado ao carrinho!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ItemCard;
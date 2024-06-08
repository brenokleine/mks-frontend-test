'use client'
import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className='mt-auto w-full bg-[#eeeeee] flex justify-center p-1 text-xs'>
            MKS Sistemas © Todos os direitos reservados
        </div>
    );
}

export default Footer;

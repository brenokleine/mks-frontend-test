'use client'

import React, { useEffect, useState } from 'react';
import fetchProducts from './hooks/useProductsQuery';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  
  const limit = 7;

  interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
  }

  const [data, setData] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchProducts(limit)
      .then(data => {setData(data); setIsLoading(false);})
      .catch(error => console.error(error));
  }, []);

  
  return (
    <main className="w-full flex justify-center">
      {isLoading ? (
        <div className='w-full flex justify-center pt-40'>
          <LoadingSpinner loading={isLoading} />
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-6'>
          {data?.map(product => (
            <ItemCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </main>
  );
}

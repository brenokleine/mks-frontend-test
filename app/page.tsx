'use client'

import React, { useEffect, useState } from 'react';
import fetchProducts from './hooks/useProductsQuery';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  
  const page = 1;
  const rows = 5;
  const sortBy = 'id';
  const orderBy = 'ASC';

  interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: string;
  }

  const [data, setData] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchProducts(page, rows, sortBy, orderBy)
      .then(data => {setData(data.products); setIsLoading(false);})
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
              name={product.name}
              brand={product.brand}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      )}
    </main>
  );
}

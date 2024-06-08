'use client'

import React, { useEffect } from 'react';
import fetchProducts from './hooks/useProductsQuery';
import ItemCard from '@/components/ItemCard';

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

  useEffect(() => {
    fetchProducts(page, rows, sortBy, orderBy)
      .then(data => setData(data.products))
      .catch(error => console.error(error));
  }, []);

  
  return (
    <main className="w-full flex justify-center">
      <div className='flex flex-wrap gap-7 w-full pl-auto pr-auto justify-center'>
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
    </main>
  );
}

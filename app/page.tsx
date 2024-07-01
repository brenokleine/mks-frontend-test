'use client'

import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchByCategory } from './hooks/useProductsQuery';
import ItemCard from '@/components/ItemCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Home() {
  
  interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
  }
  
  const [data, setData] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categories, setCategories] = React.useState<string[]>([]);

  const getAllProducts = async () => {
    try {
      const data = await fetchProducts();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  const getProductsByCategory = async (category: string) => {
    setIsLoading(true);
    try {
      if (category === 'all') {
        await getAllProducts();
      } else {
        const data = await fetchByCategory(category);
        setData(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  const handleSearchChange = (category: string) => {
    getProductsByCategory(category);
  }
  
  return (
    <main className="w-full">
        <div className='flex flex-nowrap'>
          <div className='w-1/6 ml-8'>
            <FormControl fullWidth>
              <InputLabel>Categorias</InputLabel>
              <Select
                label="Categorias"
                defaultValue={'all'}
                onChange={(e) => handleSearchChange(e.target.value)}
              >
                <MenuItem key={'all'} value={'all'}>Todas</MenuItem>
                {
                  categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <div className='w-full flex justify-center'>
            {isLoading ? (
              <div className='w-full flex justify-center pt-52'>
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
          </div>
        </div>
    </main>
  );
}

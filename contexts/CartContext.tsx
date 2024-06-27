'use client'
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
    image: string;                        
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => Product[];
    removeFromCart: (id: number) => Product[];
    clearCart: () => void;
    cartCount: number;
    totalAmount: number;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: (product: Product) => [],
    removeFromCart: (id: number) => [],
    clearCart: () => {},
    cartCount: 0,
    totalAmount: 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const isInitialMount = useRef(true);

    // Load cart from localStorage on mount
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                try {
                    const parsedCart = JSON.parse(storedCart);
                    if (Array.isArray(parsedCart)) {
                        setCart(parsedCart);
                        console.log('Cart loaded from localStorage:', parsedCart);
                    } else {
                        console.warn('Stored cart is not an array:', parsedCart);
                    }
                } catch (error) {
                    console.error('Error parsing stored cart:', error);
                }
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const isItemInCart = prev.find((item) => item.id === product.id);

            if (isItemInCart) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, amount: item.amount + 1 } : item
                );
            }

            return [...prev, { ...product }];
        });

        return cart;
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => {
            const isItemInCart = prev.find((item) => item.id === id);

            if (isItemInCart && isItemInCart.amount > 1) {
                return prev.map((item) =>
                    item.id === id ? { ...item, amount: item.amount - 1 } : item
                );
            } else {
                return prev.filter((item) => item.id !== id);
            }
        });

        return cart;
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = cart.reduce((count, product) => count + product.amount, 0);

    const totalAmount = cart.reduce((total, product) => total + product.price * product.amount, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

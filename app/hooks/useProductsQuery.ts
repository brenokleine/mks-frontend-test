


export const fetchProducts = async (): Promise<any> => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export const fetchCategories = async (): Promise<any> => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
};

export const fetchByCategory = async (category: string): Promise<any> => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
};

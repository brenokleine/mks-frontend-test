


const fetchProducts = async (limit: number): Promise<any> => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export default fetchProducts;

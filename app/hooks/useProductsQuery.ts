


const fetchProducts = async (page: number, rows: number, sortBy: string, orderBy: string): Promise<any> => {
    const response = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export default fetchProducts;

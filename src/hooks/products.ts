import axios from 'axios';
import { IProduct } from '../models';
import { useEffect, useState } from 'react';

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  function addProduct(products: IProduct) {
    setProducts((prev) => [...prev, products]);
  }

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products'
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, addProduct };
};

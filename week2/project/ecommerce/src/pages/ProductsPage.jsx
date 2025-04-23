import { useState, useEffect } from 'react';
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter';
import { ProductList } from '../components/ProductList/ProductList';
import { Spinner } from '../components/Spinner/Spinner';

export const ProductsPage = () => {
  const NO_CATEGORY_FILTER = 'All Products';

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(NO_CATEGORY_FILTER);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        if (!response.ok)
          throw new Error(
            `HTTP Error: ${response.status}. ${response.statusText}`
          );
        const data = await response.json();
        setCategories([NO_CATEGORY_FILTER, ...data]);
      } catch (error) {
        console.log(`Error fetching categories: ${error.message}`);
        setError('Failed to load categories');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const endpoint =
          selectedCategory === NO_CATEGORY_FILTER
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await fetch(endpoint);
        if (!response.ok)
          throw new Error(
            `HTTP Error: ${response.status}. ${response.statusText}`
          );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  if (error) return <div className='error-message'>❌ {error}</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className='catalog-page'>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <ProductList products={products} />
    </main>
  );
};

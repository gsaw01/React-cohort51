import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { ProductList } from '../../components/ProductList/ProductList';
import { Spinner } from '../../components/Spinner/Spinner';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const ProductsPage = () => {
  const NO_CATEGORY_FILTER = 'All Products';

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch('https://fakestoreapi.com/products/categories');

  const [selectedCategory, setSelectedCategory] = useState(NO_CATEGORY_FILTER);
  const categories = categoriesData ? [NO_CATEGORY_FILTER, ...categoriesData] : [];

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    setUrl: setProductsUrl,
  } = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    const endpoint =
      selectedCategory === NO_CATEGORY_FILTER
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    setProductsUrl(endpoint);
  }, [selectedCategory, setProductsUrl]);

  const isLoading = categoriesLoading || productsLoading;
  const error = categoriesError || productsError;

  if (error) return <ErrorMessage message={error} />;
  if (isLoading) return <Spinner />;

  return (
    <main className='catalog-page'>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <ProductList products={products || []} />
    </main>
  );
};

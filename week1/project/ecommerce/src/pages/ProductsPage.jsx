import { useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter.jsx';
import { ProductList } from '../components/ProductList/ProductList.jsx';
import { normalizeCategoryName } from '../utils/utils.js';
import categoriesList from '../fake-data/all-categories.js';
import products from '../fake-data/all-products.js';

export const ProductsPage = () => {
  const NO_CATEGORY_FILTER = 'All Products';
  const categories = [NO_CATEGORY_FILTER, ...categoriesList];

  const [selectedCategory, setSelectedCategory] = useState(NO_CATEGORY_FILTER);

  const productsToRender =
    selectedCategory === NO_CATEGORY_FILTER
      ? products
      : products.filter(
          (product) =>
            normalizeCategoryName(product.category) ===
            normalizeCategoryName(selectedCategory)
        );

  return (
    <main className='catalog-page'>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <ProductList products={productsToRender} />
    </main>
  );
};

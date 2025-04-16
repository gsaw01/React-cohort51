import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ products }) => (
  <div className='product-list'>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

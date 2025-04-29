import './ProductCard.css';

import { useNavigate } from 'react-router-dom';
import { FavouritesButton } from '../FavouritesButton/FavouritesButton';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className='product-card' onClick={() => navigate(`/product/${product.id}`)}>
      <FavouritesButton productId={product.id} />
      <img src={product.image} alt={product.title} />
      <div className='product-info'>
        <span className='product-category-label'>{product.category}</span>
        <h3 className='product-title'>{product.title}</h3>
        <span className='product-price'>€{product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

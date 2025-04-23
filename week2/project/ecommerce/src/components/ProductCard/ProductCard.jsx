import './ProductCard.css';

import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className='product-card'
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <div className='product-info'>
        <span className='product-category-label'>{product.category}</span>
        <h3 className='product-title'>{product.title}</h3>
        <span className='product-price'>€{product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

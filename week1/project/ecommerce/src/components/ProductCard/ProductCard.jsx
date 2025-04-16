import './ProductCard.css';

export const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} />
      <div className='product-info'>
        <span className='product-category-label'>{product.category}</span>
        <h3 className='product-title'>{product.title}</h3>
        <span className='product-price'>€{product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

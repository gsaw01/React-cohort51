import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner/Spinner';
import './ProductDetailsPage.css';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok)
          throw new Error(
            `HTTP Error: ${response.status}. ${response.statusText}`
          );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(`Error product details: ${error.message}`);
        setError(`Failed to load product details`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <div className='error-message'>❌ {error}</div>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className='product-details-container'>
        <div className='product-details-image-container'>
          <img
            className='product-details-image'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='product-details-info'>
          <span className='product-details-category'>{product.category}</span>
          <h3 className='product-details-title'>{product.title}</h3>
          <div className='product-details-price'>
            €{product.price.toFixed(2)}
          </div>
          <div className='product-details-rating'>
            <span>Rating:</span> ★ {product.rating.rate} ({product.rating.count}{' '}
            votes)
          </div>
          <p className='product-details-description'>
            <span>Description:</span> {product.description}
          </p>
        </div>
      </div>
    </>
  );
};

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Spinner } from '../../components/Spinner/Spinner';

import './ProductDetailsPage.css';

export const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data: product, loading, error, setUrl } = useFetch(null);

  useEffect(() => {
    if (id) {
      setUrl(`https://fakestoreapi.com/products/${id}`);
    }
  }, [id, setUrl]);

  if (error) return <ErrorMessage message={error} />;
  if (loading || !product) return <Spinner />;

  return (
    <main className='product-page'>
      <div className='product-details-container'>
        <div className='product-details-image'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='product-details-info'>
          <h1 className='product-details-title'>{product.title}</h1>
          <p className='product-details-category'>{product.category}</p>

          <p className='product-details-description'>{product.description}</p>
          <p className='product-details-price'>€{product.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
};

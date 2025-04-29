import { useFavourites } from '../../context/FavouritesContext';
import { ProductList } from '../../components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Spinner } from '../../components/Spinner/Spinner';
import './FavouritesPage.css';

export const FavouritesPage = () => {
  const { favourites } = useFavourites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favourites.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchFavourites = async () => {
      try {
        const responses = await Promise.all(
          favourites.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to fetch product ${id}`);
              }
              return response.json();
            })
          )
        );
        setProducts(responses);
      } catch (error) {
        console.error(error);
        setError('Failed to load favourite products');
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, [favourites]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (products.length === 0)
    return (
      <div className='empty-favourites-placeholder'>
        <i className='ri-close-circle-line'></i>
        Nothing in favourites yet.
      </div>
    );

  return <ProductList products={products} />;
};

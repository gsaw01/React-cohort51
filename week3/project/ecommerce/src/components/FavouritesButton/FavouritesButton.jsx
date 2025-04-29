import { useFavourites } from '../../context/FavouritesContext';

export const FavouritesButton = ({ productId }) => {
  const { toggleFavourite, isFavourited } = useFavourites();
  const favourited = isFavourited(productId);

  return (
    <button
      className='favourite-button'
      onClick={(e) => {
        e.stopPropagation();
        toggleFavourite(productId);
      }}
    >
      {favourited ? <i class='ri-heart-3-fill'></i> : <i class='ri-heart-3-line'></i>}
    </button>
  );
};

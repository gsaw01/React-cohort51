import { NavLink } from 'react-router-dom';
import { useFavourites } from '../../context/FavouritesContext';
import './Header.css';

export const Header = () => {
  const { favourites } = useFavourites();

  return (
    <header>
      <NavLink to='/' className='header-logo'>
        ✳︎ SomeShop
      </NavLink>
      <nav className='header-nav-links'>
        <NavLink
          to='/'
          className={({ isActive }) => `header-nav-link${isActive ? ' active' : ''}`}
        >
          <i className='ri-shopping-bag-fill'></i> Products
        </NavLink>
        <NavLink
          to='/favourites'
          className={({ isActive }) => `header-nav-link${isActive ? ' active' : ''}`}
        >
          <i className='ri-heart-3-fill'></i> Favourites
          <span className='favourites-count'>{favourites.length}</span>
        </NavLink>
      </nav>
    </header>
  );
};

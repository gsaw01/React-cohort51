import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  return (
    <main className='not-found-page'>
      <p>404 - Page not found</p>
      <Link to='/' className='back-home-link'>
        Back to Products Page
      </Link>
    </main>
  );
};

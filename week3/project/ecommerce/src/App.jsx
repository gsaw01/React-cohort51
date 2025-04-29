import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavouritesProvider } from './context/FavouritesContext';
import { Header } from './components/Header/Header';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { NotFoundPage } from './pages/404/NotFoundPage';

export const App = () => (
  <FavouritesProvider>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  </FavouritesProvider>
);

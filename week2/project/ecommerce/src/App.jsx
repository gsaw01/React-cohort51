import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { Header } from './components/Header/Header';

export const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<ProductsPage />} />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
    </Routes>
  </Router>
);

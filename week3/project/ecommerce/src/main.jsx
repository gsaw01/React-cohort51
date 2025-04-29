import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.jsx';

import './styles/global/reset.css';
import './styles/global/variables.css';
import './styles/global/main.css';
import 'remixicon/fonts/remixicon.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

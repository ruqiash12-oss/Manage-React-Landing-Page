import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { register } from 'swiper/element/bundle';
import './index.css'
import App from './App.jsx'
register();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer/Footer';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import dotenv from 'dotenv';
import { BrowserRouter } from 'react-router-dom';

// dotenv.config();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>
);

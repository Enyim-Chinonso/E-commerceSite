import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import router
import App from './App'; // Main App component
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (for carousel, modal, etc.)
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <AuthProvider>
         <App />
      </AuthProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

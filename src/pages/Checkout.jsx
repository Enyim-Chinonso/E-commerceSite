import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClear = () => {
    clearCart();
    navigate('/'); // Redirect to Home
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Checkout</h2>
      <p className="lead mt-3">
        Thank you for choosing E-Shop! <br />
        This is a demo checkout page — no real payment is processed.
      </p>

        <button className="btn btn-success mt-4 me-3" onClick={handleClear}>
        Confirm
      </button>

      <Link to="/products" className="btn btn-outline-dark mt-4">
        Continue Shopping
      </Link>
       
       

     
    </div>
  );
}

export default Checkout;

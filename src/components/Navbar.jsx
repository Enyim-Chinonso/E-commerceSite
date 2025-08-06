import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

function Navbar() {
  // const [cartCount, setCartCount] = useState(3); // Dummy item count
  const [darkMode, setDarkMode] = useState(false); // Toggle state
  const { cartItems } = useContext(CartContext);


  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light navbar-color'}`}>
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">E-Shop</Link>

        {/* Search box - stays centered on large screens */}
        <div className="mx-auto navbar-search d-none d-lg-block">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and right icons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Nav Links */}
            <li className="nav-item">
              <Link className="nav-link-hover me-4" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-hover me-4" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-hover me-4" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-hover me-4" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link-hover me-4" to="/login">Login</Link>
            </li>

            {/* Cart Icon */}
            <li className="nav-item me-3 position-relative">
              <Link to="/cart" className="nav-link text-dark">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            {/* Dark/Light Toggle Button */}
            <li className="nav-item">
              <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

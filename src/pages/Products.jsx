import React, { useState, useEffect, useContext } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  // Spinner loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        {/* 🔵 Bootstrap Spinner */}
        <div
          className="spinner-border text-danger mb-3"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>

        {/* 🛒 Brand Name with Animation */}
        <h4 className="fw-bold text-danger animate__animated animate__pulse animate__infinite">
          E-Shop
        </h4>

        {/* Optional message */}
        <p className="text-muted mt-2">Loading products, please wait...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row g-4">
        {productsData.map((product) => (
          <div className="col-sm-6 col-md-4" key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

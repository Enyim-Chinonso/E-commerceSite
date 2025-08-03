import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';

function Products() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    // Later we'll share this state globally with Context
    console.log("Cart updated:", updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row g-4">
        {productsData.map((product) => (
          <div className="col-sm-6 col-md-4" key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

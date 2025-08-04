import React, { useContext } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

function Products() {
const { addToCart } = useContext(CartContext);


  

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

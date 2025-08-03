import React from 'react';
{/* <img src={product.image} alt={product.name} className="card-img-top" /> */}


function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">₦{product.price.toLocaleString()}</p>
        <button className="btn btn-danger" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

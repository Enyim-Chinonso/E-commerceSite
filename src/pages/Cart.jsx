// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// function Cart() {
//   const { cartItems } = useContext(CartContext);

// const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
// );


// return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="list-group mb-3">
//             {cartItems.map((item) => (
//               <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
//                 <div>
//                   <strong>{item.name}</strong>
//                   <br />
//                   ₦{item.price.toLocaleString()} × {item.quantity}
//                 </div>
//                 <span className="fw-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
//               </li>
//             ))}
//           </ul>
//           <h5 className="text-end">Total: ₦{totalPrice.toLocaleString()}</h5>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;




import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop now</Link></p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₦{item.price.toLocaleString()} × {item.quantity}
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQty(item.id)}>+</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>🗑</button>
                </div>
              </li>
            ))}
          </ul>

          <h5 className="text-end mb-3">Total: ₦{total.toLocaleString()}</h5>

          <div className="text-end">
            <Link to="/products" className="btn btn-outline-dark me-2">Continue Shopping</Link>
            <Link to="/checkout" className="btn btn-danger">
  Proceed to Checkout
</Link>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

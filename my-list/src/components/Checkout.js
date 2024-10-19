// Checkout.js
import React from 'react';
import './Checkout.css';

const Checkout = ({ items, onCheckout }) => {
  const totalPrice = Object.keys(items).reduce((total, category) => {
    return total + items[category].reduce((catTotal, item) => {
      return catTotal + parseFloat(item.price) * parseInt(item.quantity);
    }, 0);
  }, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul className="checkout-list">
        {Object.keys(items).flatMap(category =>
          items[category].map((item, index) => (
            <li key={index} className="checkout-item">
              {`${item.name} - $${item.price} - Qty: ${item.quantity}`}
            </li>
          ))
        )}
      </ul>
      <div className="total-price">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button onClick={onCheckout} className="checkout-button">
        Confirm Checkout
      </button>
    </div>
  );
};

export default Checkout;

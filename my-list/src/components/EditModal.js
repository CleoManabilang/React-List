// EditModal.js
import React, { useState, useEffect } from 'react';
import './EditModal.css';

const EditModal = ({ show, onClose, item = {}, onSave }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // When the modal opens or the item changes, update the state with the item's details
  useEffect(() => {
    if (item) {
      setProductName(item.name || '');
      setPrice(item.price || '');
      setQuantity(item.quantity || '');
    }
  }, [item]);

  const handleSave = () => {
    if (productName && price && quantity) {
      onSave({ name: productName, price, quantity });
      onClose(); // Close the modal after saving
    }
  };

  if (!show) {
    return null; // Don't render the modal if show is false
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Item</h2>
        <div className="modal-body">
          <label>
            Product Name:
            <input
              className="modal-input"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              className="modal-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Quantity:
            <input
              className="modal-input"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>
        <div className="modal-buttons">
          <button className="modal-button" onClick={handleSave}>Save</button>
          <button className="modal-button cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

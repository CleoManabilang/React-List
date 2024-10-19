// Main.js
import React, { useState } from 'react';
import EditModal from './EditModal';
import SearchBar from './SearchBar';
import './Main.css';

const Main = () => {
  const [items, setItems] = useState({
    Meat: [{ name: 'Chicken', price: '5', quantity: '2', checked: false }],
    Drinks: [{name: 'Redhorse', price: '120', quantity: '4', checked: false }],
    CannedGoods: [{name: 'Tinapa', price: '25', quantity: '3', checked: false }],
  });
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Meat');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const addItem = () => {
    if (input.trim()) {
      setItems({
        ...items,
        [category]: [...items[category], { name: input.trim(), price: '0', quantity: '1', checked: false }],
      });
      setInput('');
    }
  };

  const removeItem = (category, index) => {
    const newItems = items[category].filter((_, i) => i !== index);
    setItems({ ...items, [category]: newItems });
  };

  const editItem = (category, index) => {
    const itemToEdit = items[category][index];
    setSelectedItem({ category, index, ...itemToEdit });
    setIsModalOpen(true);
  };

  const saveItem = (updatedItem) => {
    const updatedCategoryItems = [...items[selectedItem.category]];
    updatedCategoryItems[selectedItem.index] = updatedItem;
    setItems({ ...items, [selectedItem.category]: updatedCategoryItems });
  };

  const toggleCheckbox = (category, index) => {
    const updatedItems = { ...items };
    updatedItems[category][index].checked = !updatedItems[category][index].checked;
    setItems(updatedItems);
  };

  const filteredItems = Object.keys(items).reduce((acc, category) => {
    const filteredCategoryItems = items[category].filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredCategoryItems.length > 0) {
      acc[category] = filteredCategoryItems;
    }
    return acc;
  }, {});

  return (
    <main className="main">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select"
        >
          <option value="Meat">Meat</option>
          <option value="Drinks">Drinks</option>
          <option value="CannedGoods">Canned Goods</option>
        </select>
        <button onClick={addItem} className="button">
          Add Item
        </button>
      </div>

      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <div className="category-container">
        {Object.keys(filteredItems).map((category) => (
          <div className="category-box" key={category}>
            <h2>{category}</h2>
            <ul className="list">
              {filteredItems[category].map((item, index) => (
                <li key={index} className={`list-item ${item.checked ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheckbox(category, index)}
                  className="checkbox"
                />
                <div className="item-details">
                  <span className="item-name">Product Name: {item.name}</span>
                  <br /> {/* Line break after product name */}
                  <span className="item-price">Price: ${item.price}</span>
                  <br /> {/* Line break after price */}
                  <span className="item-quantity">Qty: {item.quantity}</span>
                </div>
                <button onClick={() => editItem(category, index)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => removeItem(category, index)} className="remove-button">
                  Remove
                </button>
              </li>
              
              ))}
            </ul>
          </div>
        ))}
      </div>

      <EditModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onSave={saveItem}
      />
    </main>
  );
};

export default Main;

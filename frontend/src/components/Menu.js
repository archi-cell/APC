import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ menuItems, onOrderPlaced }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemName, value) => {
    setQuantities((prev) => ({ ...prev, [itemName]: value }));
  };

  const handleOrder = (item) => {
    const quantity = parseInt(quantities[item.name] || 1);
    if (quantity < 1) return;

    const order = {
      itemName: item.name,
      price: item.price,
      quantity,
      totalPrice: item.price * quantity,
      time: new Date().toLocaleString(),
      status: "Order Placed",
    };

    onOrderPlaced(order);
    setQuantities((prev) => ({ ...prev, [item.name]: 1 }));
  };

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-card">
          <img src={item.image} alt={item.name} className="menu-image"/>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div className="order-controls">
            <input
              type="number"
              min="1"
              value={quantities[item.name] || 1}
              onChange={(e) => handleQuantityChange(item.name, e.target.value)}
            />
            <button onClick={() => handleOrder(item)}>Order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

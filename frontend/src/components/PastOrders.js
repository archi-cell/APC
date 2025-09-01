import React from "react";
import "./PastOrders.css";

const PastOrders = ({ pastOrders }) => {
  return (
    <div className="orders-container">
      <h2>Past Orders</h2>
      {pastOrders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        pastOrders.map((order, index) => (
          <div key={index} className="past-orders-card">
            <strong>{order.itemName}</strong>
            <p>Quantity: {order.quantity}</p>
            <p>Total: ${order.totalPrice}</p>
            <p>Ordered at: {order.time}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PastOrders;

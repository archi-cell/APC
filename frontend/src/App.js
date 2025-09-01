import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import PastOrders from "./components/PastOrders";
import { getPastOrders } from "./api";

// Import all images
import pizza from "./images/pizza.jpg";
import burger from "./images/burger.jpg";
import pasta from "./images/pasta.jpg";
import sushi from "./images/sushi.jpg";
import coca_cola from "./images/coca_cola.jpg";
import lemonade from "./images/lemonade.jpg";
import coffee from "./images/coffee.jpg";
import green_tea from "./images/green_tea.jpg";
import fries from "./images/french_fries.jpg";
import nachos from "./images/nachos.jpg";
import rings from "./images/onion_rings.jpg";
import paneer from "./images/paneer_tikka.jpg";
import rice from "./images/fried_rice.jpg";
import manchurian from "./images/manchurian.jpg";
import rolls from "./images/spring_rolls.jpg";
import chowmein from "./images/chowmein.jpg";
import cake from "./images/chocolate_cake.jpg";
import ice from "./images/ice_cream_sundae.jpg";
import brownie from "./images/brownie.jpg";
import cheesecake from "./images/cheesecake.jpg";

function App() {

  const [menuItems, setMenuItems] = useState([
    // Main Course
    { name: "Margherita Pizza", price: 10, image: pizza },
    { name: "Veggie Burger", price: 5, image: burger },
    { name: "Spaghetti Pasta", price: 8, image: pasta },
    { name: "Sushi Roll", price: 12, image: sushi },

    // Beverages
    { name: "Coca Cola", price: 2, image: coca_cola },
    { name: "Lemonade", price: 3, image: lemonade },
    { name: "Coffee", price: 4, image: coffee },
    { name: "Green Tea", price: 3, image: green_tea },

    // Snacks
    { name: "French Fries", price: 5, image: fries },
    { name: "Nachos", price: 6, image: nachos },
    { name: "Onion Rings", price: 5, image: rings },
    { name: "Paneer Tikka", price: 7, image: paneer },

    // Chinese
    { name: "Fried Rice", price: 9, image: rice },
    { name: "Manchurian", price: 10, image: manchurian },
    { name: "Spring Rolls", price: 12, image: rolls },
    { name: "Chowmein", price: 10, image: chowmein },

    // Desserts
    { name: "Chocolate Cake", price: 8, image: cake },
    { name: "Ice Cream Sundae", price: 7, image: ice },
    { name: "Brownie", price: 6, image: brownie },
    { name: "Cheesecake", price: 9, image: cheesecake },
  ]);

  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    // Fetch past orders from backend
    getPastOrders().then((orders) => setPastOrders(orders));
  }, []);

  const handleOrderPlaced = (order) => {
    setPastOrders((prev) => [...prev, order]);
  };

  return (
    <div>
      <Navbar userName="Archi" />
      <Menu menuItems={menuItems} onOrderPlaced={handleOrderPlaced} />
      <PastOrders pastOrders={pastOrders} />
    </div>
  );
}

export default App;

import React from "react";
import "./Navbar.css";

const Navbar = ({ userName }) => {
  return (
    <nav className="navbar">
      <div className="logo">🍴 Eatify</div>
      <div className="user-greeting">Hi, {userName || "Guest"}</div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSignOut }) => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={onSignOut}>Sign Out</button>
    </nav>
  );
};

export default Navbar;

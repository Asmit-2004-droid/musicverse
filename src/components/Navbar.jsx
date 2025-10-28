import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MusicVerse</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Discover</li>
        <li>Artists</li>
        <li>Contact</li>
      </ul>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
}

export default Navbar;

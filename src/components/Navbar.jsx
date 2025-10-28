import React from "react";
import "./Navbar.css";
import { FaHome ,FaSearch, FaDownload} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MusicVerse</h1>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaSearch /> Discover</li>
        <li><FaDownload /> Downloads</li>
        <li><IoIosSettings /> Settings</li>
      </ul>
    </nav>
  );
}

export default Navbar;

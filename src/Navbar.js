import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li className="Navbar-item">
          <Link to="/Home" className="Navbar-link">Home</Link>
        </li>
        <li className = "Navbar-item">
          <Link to= "/ViewTrees" className = "Navbar-link">View Trees</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

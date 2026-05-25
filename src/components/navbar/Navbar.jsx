import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Yogi
        </Link>
        <nav className="navbar-links">
          <NavLink to="/" className="nav-link">Pricing</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="navbar-actions">
          <a href="#" className="login-link">Login</a>
          <button className="btn btn-primary sign-up-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
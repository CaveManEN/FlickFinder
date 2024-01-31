import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/profile">View Profile</Link>
      </div>
    </nav>
  );
};

export default Header;
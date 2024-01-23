import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;



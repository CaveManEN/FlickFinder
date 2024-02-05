import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AppContext from '../utils/AppContext'

const Header = () => {
  const {loggedIn} = useContext(AppContext)
  return (
    <nav className="header">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      </Link>
      <div className="navbar-links">
        {loggedIn ? <Link to="/login">Login</Link> : null}

        <Link to="/profile">View Profile</Link>
      </div>
    </nav>
  );
};

export default Header;
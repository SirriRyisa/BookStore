import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1>BookStore CMS</h1>
      <nav className="navigation">
        <Link className="nav-items" to="/">BOOKS</Link>
        <Link className="nav-items" to="/Categories">Categories</Link>
      </nav>
    </div>
    <Outlet />
  </header>
);

export default Header;

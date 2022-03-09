import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <h3>BookStore CMS</h3>
    <ul className="navigation">
      <li>Store</li>
      <li><Link to="Categories">Categories</Link></li>
    </ul>
  </div>
);

export default Nav;

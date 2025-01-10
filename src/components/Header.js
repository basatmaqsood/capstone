import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={'/logo.png'} alt="Little Lemon Logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reserve">Reserve a Table</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


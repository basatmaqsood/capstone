import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Little Lemon</h1>
      <p>Experience the finest Mediterranean cuisine in town.</p>
      <Link to="/reserve" className="cta-button">Reserve a Table</Link>
    </div>
  );
}

export default Home;


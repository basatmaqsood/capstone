import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <h2>Oops! Something went wrong.</h2>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
}

export default ErrorPage;


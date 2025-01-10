import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const reservation = location.state;

  return (
    <div className="confirmation">
      <h2>Reservation Confirmed!</h2>
      {reservation ? (
        <div className="reservation-details">
          <p><strong>Name:</strong> {reservation.name}</p>
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Phone:</strong> {reservation.phone}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>
          <p><strong>Number of guests:</strong> {reservation.guests}</p>
        </div>
      ) : (
        <p>No reservation details available.</p>
      )}
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
}

export default Confirmation;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, updateTimes }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'date') {
      updateTimes(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests) newErrors.guests = 'Number of guests is required';
    else if (formData.guests < 1) newErrors.guests = 'Number of guests must be at least 1';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/confirmation', { state: formData });
    }
  };

  return (
    <div className="booking-form">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Name"
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Email"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Phone"
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-label="Date"
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-label="Time"
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            aria-label="Number of guests"
            required
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>
        <button type="submit" className="submit-button">Reserve</button>
      </form>
    </div>
  );
}

export default BookingForm;


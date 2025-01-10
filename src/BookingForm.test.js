import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from '../BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00'];
const mockUpdateTimes = jest.fn();

const renderBookingForm = () => {
  render(
    <Router>
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
    </Router>
  );
};

describe('BookingForm', () => {
  test('Renders the BookingForm heading', () => {
    renderBookingForm();
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders all form fields', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });

  test('Displays available times', () => {
    renderBookingForm();
    const timeSelect = screen.getByLabelText(/time/i);
    mockAvailableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('Updates times when date is changed', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2023-06-20' } });
    expect(mockUpdateTimes).toHaveBeenCalledWith('2023-06-20');
  });

  test('Displays validation errors for empty fields', () => {
    renderBookingForm();
    const submitButton = screen.getByText(/reserve/i);
    fireEvent.click(submitButton);
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
  });

  test('Displays validation error for invalid email', () => {
    renderBookingForm();
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    const submitButton = screen.getByText(/reserve/i);
    fireEvent.click(submitButton);
    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
  });
});


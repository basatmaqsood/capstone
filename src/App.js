import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const updateTimes = (date) => {
    // This is a placeholder function that should be updated with real logic
    // For now, it just returns the same available times
    return availableTimes;
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/reserve" 
              element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />} 
            />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


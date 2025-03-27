"use client"
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import CleaningTypes from '../components/CleaningTypes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal'; 

const App: React.FC = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar setShowBookingModal={setShowBookingModal} />
      <Hero setShowBookingModal={setShowBookingModal} />
      <About />
      <CleaningTypes />
      <Contact />
      <Footer />
      {showBookingModal && <BookingModal setShowBookingModal={setShowBookingModal} />}
    </div>
  );
};

export default App;

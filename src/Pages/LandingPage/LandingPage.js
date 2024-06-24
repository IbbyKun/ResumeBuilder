import React from 'react';
import Navbar from './Navbar';
import LandingWidget from './LandingWidget';
import AboutUs from './AboutUs';
import Mission from './Mission';
import Vission from './Vission';
import Benifits from './Benifits';
import Support from './Support';

export default function LandingPage() {
  return (
    <div
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <Navbar />
      <LandingWidget />
      <AboutUs />
      <Mission />
      <Vission />
      <Benifits />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Support />
    </div>
  );
}

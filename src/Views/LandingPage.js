import React from 'react';
import Navbar from '../Component/Navbar';
import LandingWidget from '../Component/LandingWidget';
import AboutUs from '../Component/AboutUs';
import Mission from '../Component/Mission';
import Vission from '../Component/Vission';
import Benifits from '../Component/Benifits';
import Support from '../Component/Support';

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
     <Navbar/> 
     <LandingWidget/>
     <AboutUs/>
     <Mission/>
     <Vission/>
     <Benifits/>
     <br/><br/><br/><br/><br/>
     <Support/>
    </div>
  );
}

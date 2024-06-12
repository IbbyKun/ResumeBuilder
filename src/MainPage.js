import React from 'react';
import Steps from './Pages/Steps/steps';
import Testemonials from './Pages/Testemonials/testemonials';
import Introduction from './Components/Intro/Introduction';
import About from './Pages/About/About';


export default function Main() {
  return (
    <div
      className="mainbackground"
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <Introduction />
      <Steps />
      <Testemonials />
      <About />
    </div>
  );
}

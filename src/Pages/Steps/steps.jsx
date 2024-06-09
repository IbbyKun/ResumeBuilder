import React from 'react';
import logo1 from '../Resources/layout.png';
import logo2 from '../Resources/editing.png';
import logo3 from '../Resources/bookmark.png';

const stepStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 20px',
  textAlign: 'center', // Center text
  marginLeft: '70px', // Adjust margin to move content to the right
};

const imageStyle = {
  width: '80px',
  height: '80px',
  marginBottom: '10px',
};

const boldText = {
  fontWeight: 'bold',
  marginTop: '5px',
  color: '#38B2AC', // Color for Step 1, 2, 3
};

const regularText = {
  marginTop: '5px',
};

export default function Steps() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: 'white' }}>
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'black', marginBottom: '20px', textAlign: 'center' }}>Steps</div>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={stepStyle}>
          <img src={logo1} alt="Step 1" style={imageStyle} />
          <div style={boldText}>Select Template</div>
          <div style={regularText}>Select the template of your desire. Say goodbye to dull resume and hello to stunning designs</div>
        </div>
        <div style={stepStyle}>
          <img src={logo2} alt="Step 2" style={imageStyle} />
          <div style={boldText}>Customize Your Layout</div>
          <div style={regularText}>Make the resume template truly your own. Customize the layout based on your experience level.</div>
        </div>
        <div style={stepStyle}>
          <img src={logo3} alt="Step 3" style={imageStyle} />
          <div style={boldText}>Hit 'Download!'</div>
          <div style={regularText}>And yes, it's free! We don't hit you with a paywall once you've completed your resume in the Basic Account.</div>
        </div>
      </div>
    </div>
  );
}

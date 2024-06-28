import React from 'react';
import logo from '../../Assets/logo.png'; // Path to your logo

const footerStyle = {
  backgroundColor: '#38B2AC',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};

const socialLinksStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
};

const smallTextStyle = {
  fontSize: '12px',
  marginTop: '5px',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div>
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        <h3>Company Name</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>123 Street, City, Country, ZIP Code</li>
          <li>Phone: +123456789</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
      <div style={socialLinksStyle}>
        <h3>Socials</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Company Name.</p>
        <p style={smallTextStyle}>Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;

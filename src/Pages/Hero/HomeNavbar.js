import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const [active, setActive] = useState('Highlights'); // State to track active item

  // Function to update the active state
  const handleSetActive = (item) => {
    setActive(item);
  };

  const sectionIds = ['section2', 'section3', 'section4', 'section6'];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          {/* Logo or Brand Name */}
          <div className={styles.navbarLogo}>
            <ScrollLink to="/" smooth={true} duration={500}>
              <img
                src={Logo}
                alt="ShopSentix Logo"
                className={styles.logo}
              />
            </ScrollLink>
          </div>

          {/* Primary Navbar items centered */}
          <div className={styles.navbarItems}>
            {['Highlights', 'Explore', 'Offer', 'Contact Us'].map(
              (item, index) => (
                <ScrollLink
                  key={item}
                  to={sectionIds[index]}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`${styles.navbarLink} ${active === item ? styles.active : ''}`}
                  onClick={() => handleSetActive(item)}
                >
                  {item}
                </ScrollLink>
              )
            )}
          </div>

          {/* Secondary Navbar Items */}
          <div className={styles.navbarSecondaryItems}>
            <RouterLink
              to="/signup"
              className={styles.signupButton}
            >
              Sign Up
            </RouterLink>
            <a
              href="/login"
              className={styles.loginLink}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

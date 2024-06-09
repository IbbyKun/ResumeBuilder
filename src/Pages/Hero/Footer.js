import React from 'react';
import Logo from '../../Assets/logo.png';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = ({
  companyName,
  companyDescription,
  categories,
  socialLinks,
  copyrightYear,
}) => {
  return (
    <footer className={styles.footer}> {/* Use the className from the CSS module */}
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src={Logo} alt="ShopSentix Logo" className={styles.logo} />
            <span className={styles.companyName}>{companyName}</span>
          </div>
          <p className={styles.companyDescription}>{companyDescription}</p>
          <div className={styles.footerCategories}>
            {categories.map((category, index) => (
              <div key={index} className={styles.category}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <nav className={styles.categoryLinks}>
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={`https://www.${link.toLowerCase()}.com`}
                      className={styles.categoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerSocial}>
          <p className={styles.copyright}>
            &copy; {copyrightYear} {companyName} — Pvt. Ltd.
          </p>
          <div className={styles.socialLinks}>
            <a
              href={socialLinks.twitter}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.featherTwitter}
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.29 4.57 4.57 0 002-2.53 9.94 9.94 0 01-3.21 1.23 5 5 0 00-7.06 5.21A14.23 14.23 0 011 2a5 5 0 001.55 6.74A5 5 0 013.3 8.3a5 5 0 002.27-.63A5 5 0 016 5.47 1.67 1.67 0 005.59 5a5 5 0 013.72-2 1.68 1.68 0 011.87 1.17 3.34 3.34 0 00.83-1.28 5 5 0 011.75 2 14.91 14.91 0 001.08-.31 5.12 5.12 0 011.42 1.39A10 10 0 0023 3z"></path>
              </svg>
            </a>
            {/* Add similar links for other social media platforms */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import slideImage1 from '../Resources/pic2.jpg';
import slideImage2 from '../Resources/pic3.jpg';
import slideImage3 from '../Resources/pic4.jpg';
import styles from './Section2.module.css'; // Import the CSS module

// Dummy data for the options and images
const options = [
  {
    name: 'Accurate Results for your Product',
    imageSrc: slideImage1,
  },
  {
    name: 'More than One Format',
    imageSrc: slideImage2,
  },
  {
    name: 'Saved PDFs',
    imageSrc: slideImage3,
  },
];

const Page = () => {
  const [activeOption, setActiveOption] = useState(options[0].name);
  const [activeImageSrc, setActiveImageSrc] = useState(options[0].imageSrc);

  return (
    <section id="section2" className={styles.section2}>
      <div className={styles.pageContainer}>
        {/* Blue circle background */}
        <div className={styles.hiddenLgBlock}>
          <div className={styles.circleLarge}></div>
          <div className={styles.circleSmall}></div>
          <div className={styles.bars}>
            <div className={styles.barSmall}></div>
            <div className={styles.barMedium}></div>
            <div className={styles.barLarge}></div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>What We Have For You</h1>
            <div className={styles.decorativeLine}></div>
          </div>
          <ul className={styles.optionsList}>
            {options.map((option, index) => (
              <li
                key={index}
                className={styles.optionItem}
                onMouseEnter={() => {
                  setActiveOption(option.name);
                  setActiveImageSrc(option.imageSrc);
                }}
              >
                <div
                  className={`${styles.optionText} ${
                    activeOption === option.name ? styles.active : styles.inactive
                  }`}
                >
                  {option.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={activeImageSrc}
            alt="Selected Option"
            className={styles.activeImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;

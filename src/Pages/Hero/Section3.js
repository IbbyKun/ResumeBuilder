import React from 'react';
import card1 from '../Resources/pic1.jpg';
import card2 from '../Resources/pic2.jpg';
import card3 from '../Resources/pic3.jpg';
import card4 from '../Resources/pic4.jpg';
import card5 from '../Resources/pic1.jpg';
import styles from './Section3.module.css'; // Import the CSS module

// Dummy data for card images and text
const cards = [
  { title: 'Emotion Insight', imageUrl: card1 },
  { title: 'Sentiment Explore', imageUrl: card2 },
  { title: 'Text Vibes', imageUrl: card3 },
  { title: 'Feeling Flow', imageUrl: card4 },
  { title: 'Word Moods', imageUrl: card5 },
  // ... add more cards as needed
];

const Card = ({ title, imageUrl }) => (
  <div className={styles.card}>
    <img src={imageUrl} alt={title} className={styles.cardImage} />
    <div className={styles.cardTitle}>{title}</div>
  </div>
);

const Page = () => {
  return (
    <section id="section3" className={styles.pageSection}>
      <div className={styles.decorativeElements}>
        {/* Decorative elements here */}
      </div>
      <h1 className={styles.sectionTitle}>Explore the ShopSentix</h1>
      <div className={styles.sectionDivider}></div>
      <p className={styles.sectionDescription}>
        Dive into the heart of words, where sentiments come to life.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.row}>
          {cards.slice(0, 3).map((card, index) => (
            <Card key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </div>
        {cards.length > 3 && (
          <div className={styles.row}>
            {cards.slice(3, 5).map((card, index) => (
              <Card key={index} title={card.title} imageUrl={card.imageUrl} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;

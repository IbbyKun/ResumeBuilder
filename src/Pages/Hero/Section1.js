import React from 'react';
import backgroundImage from '../Resources/pic1.jpg'; // Replace with your image file
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* Background Image */}
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>

            {/* Dark Overlay with reduced opacity */}
            <div className="dark-overlay"></div>

            {/* Overlay Text */}
            <div className="overlay-text">
                <h1 className="main-heading">
                    Decode Emotions, Uncover Insights
                </h1>
                <p className="sub-heading">
                    Your Sentiments, Analyzed
                </p>
            </div>
        </div>
    );
};

export default HeroSection;

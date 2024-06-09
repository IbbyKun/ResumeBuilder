import React from 'react';
import imageUrl from '../Resources/developer.jpg';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
};

const headingStyle = {
  marginTop: '10px',
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '20px',
};

const lineStyle = {
  marginTop: '2.5px',
  backgroundColor: '#38B2AC',
  border: '5px solid #38B2AC',
  width: '241px',
};

const testimonialContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px', // Reduce the gap between testimonials
  textAlign: 'center',
  maxWidth: '800px', // Reduce the width of testimonials
};

const testimonialStyle = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  padding: '12px',
  borderRadius: '46px',
  backgroundColor: '#38B2AC',
  maxWidth: '100%',
};

const imageStyle = {
  flexShrink: 0,
  borderRadius: '50%',
  aspectRatio: '1.05',
  width: '80px', // Adjust the width of the image
  height: '80px', // Adjust the height of the image
};

export default function Testimonials() {
  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Testimonials</div>
      <div style={testimonialContainerStyle}>
        <div style={testimonialStyle}>
          <img loading="lazy" src={imageUrl} alt="Client1" style={imageStyle} />
          <div>
            "The CV maker website helped me create a professional resume that
            caught recruiters' attention. With easy-to-use templates, I
            highlighted my skills and landed my dream job!"
          </div>
        </div>
        <div style={testimonialStyle}>
          <div>
            "Thanks to the CV maker website, I created a visually appealing
            resume that stood out to employers. The platform's guidance and
            templates made the process quick and easy."
          </div>
          <img loading="lazy" src={imageUrl} alt="Client2" style={imageStyle} />
        </div>
        <div style={testimonialStyle}>
          <img loading="lazy" src={imageUrl} alt="Client3" style={imageStyle} />
          <div>
            "Using the CV maker website, I transformed my resume into a modern,
            eye-catching document. Its step-by-step process and templates helped
            me secure a job that matched my qualifications."
          </div>
        </div>
      </div>
    </div>
  );
}

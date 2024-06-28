import React from 'react';
import image from './Resources/Home1.jpg'

export default function LandingWidget() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: 'white',
          padding: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '50%',
              textAlign: 'center',
              marginBottom: '2rem',
              marginLeft: '40px',
              fontFamily: 'Judson',
            }}
          >
            <h1
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'left',
              }}
            >
              Your next big idea starts here
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                textAlign: 'left',
              }}
            >
              The ideal framework to learn how to parse and build resumes
            </p>
            <button
              style={{
                backgroundColor: 'white',
                color: '#6B46C1',
                fontWeight: '600',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '40px',
              }}
            >
              Start Here
              <svg
                style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div style={{ width: '100%', maxWidth: '50%', display: 'flex', justifyContent: 'center' }}>
            <img
              src={image}
              alt="Illustration"
              style={{ width: '100%', maxWidth: '25rem' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

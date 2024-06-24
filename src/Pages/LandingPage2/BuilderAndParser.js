import React from 'react';

export default function BuilderAndParser() {
  return (
    <>
      <div
        className="mainbackground"
        style={{
          background: 'linear-gradient(180deg, #3E1F47, #144552)',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* Navbar of this Page */}
        <div>
          <nav style={{ backgroundColor: '#3E1F47', padding: '1rem 2rem' }}>
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontFamily: 'Dancing Script',
                  color: 'white',
                }}
              >
                ResumeParser
              </div>
              <div className="hidden md:flex space-x-8 text-lg">
                <a
                  href="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Home
                </a>
                <a
                  href="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Resume Builder
                </a>
                <a
                  href="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Resume Parser
                </a>
              </div>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            className="md:hidden text-white p-4"
            id="mobile-menu"
            style={{ backgroundColor: '#3E1F47' }}
          >
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Home
            </a>
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Resume Builder
            </a>
            <a
              href="/"
              className="block py-2 hover:text-zinc-300"
              style={{ textDecoration: 'none' }}
            >
              Resume Parser
            </a>
          </div>
        </div>
        {/* Navbar Ends Here */}

        {/* Main Part of the page, with two Builder and Parser Buttons */}
        <div
          style={{ color: 'white', padding: '4rem 2rem', textAlign: 'center' }}
        >
          <h1
            style={{
              fontSize: '4rem',
              fontFamily: 'Judson',
              marginBottom: '2rem',
            }}
          >
            AI Driven Resume Parser
          </h1>
          <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
            With this free, open-source and powerful AI based resume parser and
            builder
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <button
              style={{
                border: '1px solid white',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >
              Resume Parser
            </button>
            <button
              style={{
                border: '1px solid white',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >
              Resume Builder
            </button>
          </div>
          <img
            src="..."
            alt="AI Driven Resume Parser Illustration"
            style={{
              display: 'block',
              maxWidth: '100%',
              margin: '0 auto',
              marginBottom: '2rem',
            }}
          />
        </div>
        {/* Main Div Ends Here */}

        {/* About Resume Parser */}
        <div style={{ color: 'white', padding: '4rem 2rem' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '2 1 0%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="..."
                alt="About Us Image"
                style={{
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%',
                }}
              />
            </div>
            <div style={{ flex: '3 1 0%', textAlign: 'left' }}>
              <h2
                style={{
                  fontFamily: 'Judson',
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                About Resume Parser
              </h2>
              <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
                Our tool, Resume Parser, is a deep learning/AI framework
                designed to revolutionize the hiring process. The resume parser
                swiftly and accurately extracts, analyzes, stores, organizes,
                and enriches relevant information from resumes using taxonomies.
                It acts as a compiler, transforming unstructured data into
                structured data, all at remarkable speeds, far exceeding human
                capabilities.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Use The Tool
              </button>
            </div>
          </div>
        </div>

        {/* About Resume Builder */}
        <div style={{ color: 'white', padding: '4rem 2rem' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '2 1 0%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="..."
                alt="About Us Image"
                style={{
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%',
                }}
              />
            </div>
            <div style={{ flex: '3 1 0%', textAlign: 'left' }}>
              <h2
                style={{
                  fontFamily: 'Judson',
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                About Resume Builder
              </h2>
              <p style={{ fontFamily: 'Judson', marginBottom: '2rem' }}>
                Our resume builder uses Artificial Intelligence for creating
                effective resumes for different people with different
                designations. It actually offers a user-friendly platform with a
                variety of professionally designated templates, allowing
                individuals for entering their details. Users just have to enter
                all their personal information which is required for any resume.
                It also provides guidance to their users to strengthen them and
                creating a document that captures the attention of the potential
                employers.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Use The Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

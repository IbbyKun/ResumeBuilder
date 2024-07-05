import { color } from '@chakra-ui/react';
import React, { useState } from 'react';

const PDFUpload = () => {
  const [parsedData, setParsedData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('resume');
    formData.append('resume', fileInput.files[0]);

    const response = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setParsedData({
      name: result.name,
      email: result.email,
      phone: result.phone,
      skills: result.skills,
    });
  };

  const handleClear = () => {
    setParsedData({
      name: '',
      email: '',
      phone: '',
      skills: [],
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full viewport height
        background: 'linear-gradient(180deg, #3E1F47, #144552)', // Updated background color
        fontFamily: 'Arial, sans-serif',
        overflowX: 'hidden',
        color: '#fff', // Text color for contrast
      }}
    >
      <form
        style={{
          width: '80%', // Adjust width as needed
          maxWidth: '600px', // Maximum width for larger screens
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background for form
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Example box shadow
        }}
        id="pdfForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: 'black', // Text color black
          }}
        >
          Upload Resume PDF
        </h1>
        <input
          type="file"
          id="resume"
          name="resume"
          accept="application/pdf"
          required
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxSizing: 'border-box',
            color: 'black',
            marginBottom: '6px',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff', // Text color white
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Upload
        </button>

        <h2
          style={{
            fontSize: '1.5rem',
            marginTop: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#000', // Text color black
          }}
        >
          Parsed Resume Data
        </h2>
        <div id="parsedData" style={{ marginBottom: '1rem', color: '#000' }}>
          {/* Added text color black for parsed data */}
          <p>
            <strong>Name:</strong> <span id="name">{parsedData.name}</span>
          </p>
          <p>
            <strong>Email:</strong> <span id="email">{parsedData.email}</span>
          </p>
          <p>
            <strong>Phone No:</strong>{' '}
            <span id="phone">{parsedData.phone}</span>
          </p>
          <p>
            <strong>Skills:</strong>{' '}
            <span id="skills">{parsedData.skills.join(', ')}</span>
          </p>
        </div>

        <button
          onClick={handleClear}
          style={{
            width: '100%',
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: '#fff', // Text color white
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default PDFUpload;

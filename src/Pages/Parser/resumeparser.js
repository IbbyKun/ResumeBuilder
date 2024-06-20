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

    const response = await fetch('http://localhost:3001/upload', {
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

  return (
    <div>
      <h1>Upload Resume PDF</h1>
      <form id="pdfForm" onSubmit={handleSubmit} enctype="multipart/form-data">
        <input
          type="file"
          id="resume"
          name="resume"
          accept="application/pdf"
          required
        />
        <button type="submit">Upload</button>
      </form>

      <h2>Parsed Resume Data</h2>
      <div id="parsedData">
        <p>
          <strong>Name:</strong> <span id="name">{parsedData.name}</span>
        </p>
        <p>
          <strong>Email:</strong> <span id="email">{parsedData.email}</span>
        </p>
        <p>
          <strong>Phone No:</strong> <span id="phone">{parsedData.phone}</span>
        </p>
        <p>
          <strong>Skills:</strong>{' '}
          <span id="skills">{parsedData.skills.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default PDFUpload;

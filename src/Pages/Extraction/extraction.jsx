import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#38B2AC',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};

const tableStyle = {
  marginTop: '20px',
  borderCollapse: 'collapse',
  width: '80%',
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setShowTable(false); // Reset table visibility on new file upload
  };

  const handleButtonClick = () => {
    if (file) {
      setShowTable(true);
    } else {
      alert('Please upload a PDF file first.');
    }
  };

  return (
    <div style={containerStyle}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button style={buttonStyle} onClick={handleButtonClick}>
        Show Table
      </button>
      {showTable && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Header 1</th>
              <th style={thStyle}>Header 2</th>
              <th style={thStyle}>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Data 1</td>
              <td style={tdStyle}>Data 2</td>
              <td style={tdStyle}>Data 3</td>
            </tr>
            <tr>
              <td style={tdStyle}>Data 4</td>
              <td style={tdStyle}>Data 5</td>
              <td style={tdStyle}>Data 6</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UploadPDF;

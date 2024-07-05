import React, { useState } from 'react';

const PdfDirectoryCategory = () => {
  const [categoryCounts, setCategoryCounts] = useState({});

  const processPDFs = () => {
    const pdfDirectory = document.getElementById('pdf-directory').value;
    fetch('http://localhost:8000/process-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pdfDirectory: pdfDirectory }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategoryCounts(data.categoryCounts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #3E1F47, #144552)',
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.header}>Enter PDF Directory Path</h1>
        <form id="pdf-form" style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="pdf-directory" style={styles.label}>
              PDF Directory Path:
            </label>
            <input
              type="text"
              id="pdf-directory"
              name="pdf-directory"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category Counts:</label>
            <div id="category" style={styles.category}>
              {Object.keys(categoryCounts).length === 0 ? (
                <span>Waiting to upload</span>
              ) : (
                <ul>
                  {Object.entries(categoryCounts).map(([category, count]) => (
                    <li key={category}>
                      {category}: {count}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button type="button" onClick={processPDFs} style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  category: {
    display: 'block',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default PdfDirectoryCategory;

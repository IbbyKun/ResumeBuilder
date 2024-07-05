import { Center } from '@chakra-ui/react';
import React, { useState } from 'react';

const PdfJobMatcher = () => {
  const [result, setResult] = useState('');

  const processDirectory = async () => {
    const pdfDirectory = document.getElementById('pdf-directory').value;

    try {
      const response = await fetch('http://localhost:8000/process-directory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfDirectory: pdfDirectory }),
      });
      const data = await response.json();
      setResult('Directory processed: ' + data.message);
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to process directory.');
    }
  };

  const processJobMatching = async () => {
    const jobDescription = document.getElementById('job-description').value;
    const excelFile = document.getElementById('excel-file').files[0];

    const formData = new FormData();
    formData.append('jobDescription', jobDescription);
    formData.append('excelFile', excelFile);

    try {
      const response = await fetch(
        'http://localhost:8000/process-job-matching',
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      console.log('Received data:', data); // Log the received data
      setResult(generateTable(data.top10Rows));
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to process job matching.');
    }
  };

  const generateTable = (data) => {
    if (!data || data.length === 0) {
      return 'No results to display.';
    }
  
    const rows = data.map((item, index) => (
      <tr key={index} >
        <td>{item[0]}</td>
        <td style={styles.tableRow}>{item[1]}</td>
        <td >{item[2]}</td>
      </tr>
    ));
  
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse' ,tableLayout: 'fixed'}}>
        <thead>
          <tr>
            <th style={styles.tableHeaderID}>ID</th>
            <th style={styles.tableHeader}>Resume</th>
            <th style={styles.tableHeaderScore}>Similarity Score</th>
          </tr>
        </thead>
        <tbody >{rows}</tbody>
      </table>
    );
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
        <h1 style={styles.header}>Process PDFs for Job Matching</h1>
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
          <button onClick={processDirectory} style={styles.button}>
            Process Directory
          </button>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="excel-file" style={styles.label}>
            Upload Excel File:
          </label>
          <input
            type="file"
            id="excel-file"
            accept=".xlsx, .xls, .csv"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="job-description" style={styles.label}>
            Job Description:
          </label>
          <textarea
            id="job-description"
            name="job-description"
            style={styles.textarea}
          ></textarea>
          <button onClick={processJobMatching} style={styles.button}>
            Process Job Matching
          </button>
        </div>
        <div id="result" style={styles.result}>
          {typeof result === 'string' ? result : result}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
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
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    height: '100px',
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
    marginTop: '10px',
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  
  tableHeaderID: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'right',
    backgroundColor: '#f2f2f2',
  },
  tableHeader: {
    borderBottom: '10px solid #ddd',
    padding: '10px',
    textAlign: 'Center',
    backgroundColor: '#f2f2f2',
    width:'70%',
    boxSizing: 'border-box',
  },
  tableHeaderScore: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'Center',
    backgroundColor: '#f2f2f2',
    width: '24%',
  },

  tableRow: {
    maxHeight: '100px',
    maxWidth: '100%',
    overflowY: 'auto',
    display: 'block',
  },
  tableRowScore: {
    maxHeight: '100px',
    maxWidth: '100px',
    overflowY: 'auto',
  },
};

export default PdfJobMatcher;

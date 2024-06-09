import React, { useState } from 'react';

const PdfToTable = () => {
  const [pdfText, setPdfText] = useState('');
  const [tableData, setTableData] = useState([]);

  // Function to handle paste event
  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('Text');
    setPdfText(pasteData);

    // Convert pasteData to tableData (example)
    const lines = pasteData.split('\n').map(line => line.trim());
    const data = lines.map(line => line.split('\t'));
    setTableData(data);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Paste your PDF content here:</h1>
      <textarea
        style={{ width: '100%', height: '200px', border: '1px solid #38B2AC', marginTop: '10px' }}
        onPaste={handlePaste}
      ></textarea>

      <h2 style={{ marginTop: '20px' }}>Table:</h2>
      <div style={{ overflowX: 'auto', marginTop: '10px' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={`${rowIndex}-${cellIndex}`} style={{ border: '1px solid #38B2AC', padding: '5px' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PdfToTable;

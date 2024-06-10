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

const FolderTable = () => {
  const [fileList, setFileList] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFolderChange = (event) => {
    const files = Array.from(event.target.files);
    const fileNames = files.map((file, index) => ({
      rank: index + 1,
      name: file.name,
    }));
    setFileList(fileNames);
    setShowTable(true);
  };

  return (
    <div style={containerStyle}>
      <input
        type="file"
        webkitdirectory="true"
        directory="true"
        onChange={handleFolderChange}
        style={buttonStyle}
      />
      {showTable && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Rank</th>
              <th style={thStyle}>Name</th>
            </tr>
          </thead>
          <tbody>
            {fileList.map((file, index) => (
              <tr key={index}>
                <td style={tdStyle}>{file.rank}</td>
                <td style={tdStyle}>{file.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FolderTable;

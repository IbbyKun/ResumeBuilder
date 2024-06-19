// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const XLSX = require('xlsx');
const { exec } = require('child_process');

app.use(cors());
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'category.html'));
});

// Route to handle PDF directory path
app.post('/process-pdf', (req, res) => {
  const pdfDirectory = req.body.pdfDirectory;
  console.log(`Received PDF directory path: ${pdfDirectory}`);
  processPDFs(pdfDirectory);

  const category = 'Sample Category';
  res.json({ category: category });
});

async function predictCategory(text) {
  const response = await fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pdf_content: text }),
  });
  const data = await response.json();
  console.log(`Predicted category: ${data.category}`); // Log the predicted category
  return data.category;
}
const generateExcelFiles = (pdfDataByCategory, outputDir) => {
  Object.keys(pdfDataByCategory).forEach((category) => {
    const wb = XLSX.utils.book_new();
    const wsData = [['ID', 'Text', 'Category']];

    pdfDataByCategory[category].forEach((pdf) => {
      wsData.push([pdf.id, pdf.text, pdf.category]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'PDF Data');

    const outputPath = path.join(outputDir, `${category}.xlsx`);
    XLSX.writeFile(wb, outputPath);
  });
};
const readPDFFiles = async (directoryPath) => {
  const files = fs.readdirSync(directoryPath);
  const pdfFiles = files.filter((file) => file.endsWith('.pdf'));

  const pdfData = [];

  for (let i = 0; i < pdfFiles.length; i++) {
    const filePath = path.join(directoryPath, pdfFiles[i]);
    const fileBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(fileBuffer);

    pdfData.push({
      id: i + 1,
      text: data.text,
    });
  }

  return pdfData;
};

async function processPDFs(directoryPath) {
  const outputDir = '\\Project\\RESUME-SCREENING-App-main\\Categories'; // Change this to your desired output folder

  const categories = [
    'Business Analyst',
    'Data Science',
    'Advocate',
    'Electrical Engineer',
    'HR',
    'others',
  ];

  try {
    const pdfData = await readPDFFiles(directoryPath);

    const pdfDataByCategory = categories.reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {});

    // Predict categories for each PDF text
    for (let i = 0; i < pdfData.length; i++) {
      const category = await predictCategory(pdfData[i].text);
      if (categories.includes(category)) {
        pdfData[i].category = category;
        pdfDataByCategory[category].push(pdfData[i]);
      } else {
        //console.log(`Category ${category} is not in the predefined categories list. Skipping PDF ID: ${pdfData[i].id}`);
        const categ = 'others';
        pdfData[i].category = categ;
        pdfDataByCategory[categ].push(pdfData[i]);
      }
    }

    generateExcelFiles(pdfDataByCategory, outputDir);
    console.log('Excel files generated successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const XLSX = require('xlsx');
const xlsx = require('xlsx');
const axios = require('axios');
const cors = require('cors');
const natural = require('natural');
const TfIdf = natural.TfIdf;
const tokenizer = new natural.WordTokenizer();
const { exec } = require('child_process');

const upload = multer({ dest: 'uploads/' });
const app = express();
app.use(cors());
const port = 8000;

app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'NewRanking.html'));
});

// Route to handle form data and file uploads
app.post('/process-directory', upload.single('excelFile'), async (req, res) => {
  console.log('Directory');
  const pdfDirectory = req.body.pdfDirectory;

  console.log(`Received PDF directory path: ${pdfDirectory}`);

  try {
    const pdfData = await readPDFFiles(pdfDirectory);
    generateExcel(pdfData, 'GeneratedResumes.xlsx');
    res.json({ message: 'Processing completed successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// Function to read all PDF files from a directory
async function readPDFFiles(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  const pdfFiles = files.filter((file) => file.endsWith('.pdf'));

  const pdfData = [];
  for (const file of pdfFiles) {
    const filePath = path.join(directoryPath, file);
    const fileBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(fileBuffer);
    pdfData.push({
      text: data.text,
    });
  }
  return pdfData;
}

// Function to generate Excel file from the parsed PDF data
function generateExcel(pdfData, outputPath) {
  const wb = XLSX.utils.book_new();
  const wsData = pdfData.map((data, index) => [index + 1, data.text]);

  const ws = XLSX.utils.aoa_to_sheet([['ID', 'Text'], ...wsData]);
  XLSX.utils.book_append_sheet(wb, ws, 'PDF Data');

  XLSX.writeFile(wb, outputPath);
  console.log('Excel File Generated');
}

// Endpoint for processing job matching with Excel file
app.post(
  '/process-job-matching',
  upload.single('excelFile'),
  async (req, res) => {
    const description = req.body.jobDescription;
    const filePath = req.file.path;
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(`Received job description: ${description}`);

    try {
      // Add the similarity score column
      data[0].push('Similarity Score');
      const resumeTextIndex = 1;
      for (let i = 1; i < data.length; i++) {
        const resumeText = data[i][resumeTextIndex];
        data[i].push(calculateCosineSimilarity(resumeText, description));
      }

      // Create a new workbook with the updated data
      const newSheet = XLSX.utils.aoa_to_sheet(data);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Sheet1');

      // Save the new workbook to a file
      const newFilePath = path.join(__dirname, 'uploads', 'updated_file.xlsx');
      XLSX.writeFile(newWorkbook, newFilePath);
      console.log('Before');

      const top10Rows = getTop10RowsBySimilarityScore(newFilePath);
      console.log('After');
      // Remove the original uploaded file
      fs.unlinkSync(filePath);

      res.json({
        message: 'File processed successfully',
        downloadLink: '/uploads/updated_file.xlsx',
        top10Rows: top10Rows,
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to process job matching' });
    }
  }
);

function cosineSimilarity(vectorA, vectorB) {
  let dotProduct = 0.0;
  let magnitudeA = 0.0;
  let magnitudeB = 0.0;

  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
    magnitudeA += vectorA[i] * vectorA[i];
    magnitudeB += vectorB[i] * vectorB[i];
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  return magnitudeA && magnitudeB
    ? dotProduct / (magnitudeA * magnitudeB)
    : 0.0;
}

function getVector(tfidf, documentIndex, terms) {
  return terms.map((term) => tfidf.tfidf(term, documentIndex));
}

function calculateCosineSimilarity(jobDescription, resume) {
  const tfidf = new TfIdf();

  tfidf.addDocument(jobDescription);
  tfidf.addDocument(resume);

  const tokenizer = new natural.WordTokenizer();
  const jobDescTokens = tokenizer.tokenize(jobDescription.toLowerCase());
  const resumeTokens = tokenizer.tokenize(resume.toLowerCase());

  const allTerms = Array.from(new Set([...jobDescTokens, ...resumeTokens]));

  const jobDescVector = getVector(tfidf, 0, allTerms);
  const resumeVector = getVector(tfidf, 1, allTerms);

  return cosineSimilarity(jobDescVector, resumeVector);
}

function getTop10RowsBySimilarityScore(filePath) {
  // Read the workbook
  const workbook = xlsx.readFile(filePath);

  // Assume the first sheet is the relevant one
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  console.log('Top 10');

  // Convert sheet to JSON
  const jsonData = xlsx.utils.sheet_to_json(sheet);

  // Check if third column exists and contains similarity scores
  if (
    jsonData.length === 0 ||
    typeof jsonData[0]['Similarity Score'] === 'undefined'
  ) {
    throw new Error('The third column should contain similarity scores.');
  }

  // Sort the rows by similarity score in descending order
  jsonData.sort((a, b) => b['Similarity Score'] - a['Similarity Score']);

  // Get the top 10 rows
  const top10Rows = jsonData.slice(0, 10);

  return top10Rows;
}

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

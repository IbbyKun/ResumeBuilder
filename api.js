const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const XLSX = require('xlsx');
const axios = require('axios');
const cors = require('cors');
const natural = require('natural');
const bcrypt = require('bcrypt');
const { exec } = require('child_process');
const collection = require('./mongo'); // Ensure this is correctly set up
const upload = multer({ dest: 'uploads/' });
const app = express();
app.use(cors());
const port = 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'category.html'));
});
app.get('/ranking', (req, res) => {
  res.sendFile(path.join(__dirname, 'NewRanking.html'));
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle PDF directory path
app.post('/process-pdf', async (req, res) => {
  const pdfDirectory = req.body.pdfDirectory;
  console.log(`Received PDF directory path: ${pdfDirectory}`);
  await processPDFs(pdfDirectory);
  const category = 'Sample Category';
  res.json({ category: category });
});

async function predictCategory(text) {
  const response = await axios.post('http://127.0.0.1:5000/predict', {
    pdf_content: text,
  });
  console.log(`Predicted category: ${response.data.category}`);
  return response.data.category;
}

const ensureDirectoryExistence = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const generateExcelFiles = (pdfDataByCategory, outputDir) => {
  // Ensure the output directory exists
  ensureDirectoryExistence(outputDir);

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
  const outputDir = path.join(__dirname, 'uploads'); // Change this to your desired output folder

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

// User authentication routes
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        res.json('exist');
      } else {
        res.json('wrongpassword');
      }
    } else {
      res.json('notexist');
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      await collection.insertMany({
        name: name,
        email: email,
        password: hashedPassword,
      });

      res.json('notexist');
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

// Route to handle form data and file uploads
app.post('/process-directory', upload.single('excelFile'), async (req, res) => {
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
      data[0].push('Similarity Score');
      const resumeTextIndex = 1;
      for (let i = 1; i < data.length; i++) {
        const resumeText = data[i][resumeTextIndex];
        data[i].push(calculateCosineSimilarity(resumeText, description));
      }

      const newSheet = XLSX.utils.aoa_to_sheet(data);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Sheet1');

      const newFilePath = path.join(__dirname, 'uploads', 'updated_file.xlsx');
      XLSX.writeFile(newWorkbook, newFilePath);

      const top10Rows = getTop10RowsBySimilarityScore(newFilePath);

      console.log('Top 10 Rows:', top10Rows); // Add this line to log top 10 rows

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
  const tfidf = new natural.TfIdf();

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
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const similarityScoreIndex = data[0].indexOf('Similarity Score');
  const sortedData = data
    .slice(1)
    .sort((a, b) => b[similarityScoreIndex] - a[similarityScoreIndex]);
  const top10Rows = sortedData.slice(0, 10);

  return top10Rows;
}

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

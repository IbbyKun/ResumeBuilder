const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

// Serve the index.html file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'resumeparser.html'));
});

// Function to extract information from text
async function extractInformation(resumeText) {
  const response = await fetch('http://127.0.0.1:5000/extract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: resumeText }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return {
      name: data.personal_info.name,
      email: data.personal_info.email,
      phone: data.personal_info.phone,
      skills: data.skills,
    };
    // Handle the data (personal_info, experiences, skills) here
  } else {
    console.error('Failed to extract information');
  }
  // Simulate parsing the extracted text
  // In real scenarios, you would parse the text to extract actual information
  return {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    skills: ['JavaScript', 'Node.js', 'Express', 'React'],
    extractedText: resumeText.substring(0, 1000), // Include some extracted text in the response
  };
}

// Endpoint to handle file upload
app.post('/upload', upload.single('resume'), (req, res) => {
  const resumePath = req.file.path;

  // Read the PDF file
  let dataBuffer = fs.readFileSync(resumePath);

  pdf(dataBuffer)
    .then(async function (data) {
      // Extract text from the PDF
      const extractedText = data.text;
      console.log('Extracted Text:', extractedText.substring(0, 1000)); // Display first 1000 characters in the console

      // Get parsed resume data
      const parsedData = await extractInformation(extractedText);
      console.log('Parsed');
      console.log(parsedData);
      console.log('Parsed After');
      res.json(parsedData);
    })
    .catch(function (error) {
      console.error('Error extracting text from PDF:', error);
      res.status(500).json({ error: 'Failed to parse PDF' });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

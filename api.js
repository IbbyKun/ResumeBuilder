const express = require('express');
const collection = require('./mongo');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email }); // Changed from 'check' to 'user'

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password); // Use 'user.password' instead of 'user'

      if (isPasswordMatch) {
        res.json('exist');
      } else {
        res.json('wrongpassword');
      }
    } else {
      res.json('notexist');
      console.log('User Logged In');
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
      console.log('User Registered');
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.listen(8000, () => { // Ensure the server listens on port 8000
  console.log('Server running on port 8000');
});

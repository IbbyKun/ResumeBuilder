const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/resumemaker', { useNewUrlParser: true, useUnifiedTopology: true }) // Added connection options
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((e) => {
    console.error('failed to connect to database', e); // Improved error logging
  });

const newSchema = new mongoose.Schema({
  name: { // Added the name field to the schema
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model('users', newSchema);

module.exports = collection;

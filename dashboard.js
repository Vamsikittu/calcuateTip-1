const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define MongoDB schema and model
const dashboardSchema = new mongoose.Schema({
  salary: String,
  PAM: String
});
const Dashboard = mongoose.model('Dashboard', dashboardSchema);

// API endpoint to fetch data
app.get('/api/dashboard', (req, res) => {
  Dashboard.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
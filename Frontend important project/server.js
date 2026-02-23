require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example static projects endpoint (could later be replaced by DB)
app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, title: 'Project Alpha', desc: 'A web app that does X', tech: ['React','Node'], repo: '#', live: '#' },
    { id: 2, title: 'Project Beta', desc: 'Mobile-first design', tech: ['React','Tailwind'], repo: '#', live: '#' }
  ];
  res.json(projects);
});

app.use('/api/contact', contactRoutes);

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error', err);
  });

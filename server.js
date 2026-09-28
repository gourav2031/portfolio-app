const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy Projects (Backend Data)
let projects = [
  { id: 1, title: 'Personal Portfolio', desc: 'HTML, CSS, JS aur Node.js se bana project' },
  { id: 2, title: 'Task Manager App', desc: 'Full-stack CRUD application' }
];

// API endpoint
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server ready at http://localhost:${PORT}`);
});
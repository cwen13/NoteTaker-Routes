const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
<<<<<<< HEAD
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
=======
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// if any other url paramter is added go to index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
>>>>>>> 004a403c61e325ba8881cda4f3a20d65ff529399
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Homepage endpoint
app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contactMe', 'index.html')); //
});

app.get('/competences', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/competences', 'index.html')); //
});

app.get('/projets', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/projets', 'index.html')); //
});

app.get('/pro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pro', 'index.html')); //
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/homepage`);
});




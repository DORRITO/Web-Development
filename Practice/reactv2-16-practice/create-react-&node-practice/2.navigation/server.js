const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page' });
});

app.get('/about', (req, res) => {
  res.send({ express: 'this is the about page' });
});

app.get('/contact', (req, res) => {
  res.send({ express: 'this is the contact page' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
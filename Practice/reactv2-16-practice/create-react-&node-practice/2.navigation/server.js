const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end' });
});

app.get('/about', (req, res) => {
  res.send({ express: 'this is the about page from the back end' });
});

app.get('/contact', (req, res) => {
  res.send({ express: 'this is the contact page from the back end' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
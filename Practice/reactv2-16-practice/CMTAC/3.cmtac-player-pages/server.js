const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end' });
});

app.get('/login', (req, res) => {
  res.send({ express: 'this is the login page from the back end' });
});

app.get('/signup', (req, res) => {
  res.send({ express: 'this is the signup page from the back end' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
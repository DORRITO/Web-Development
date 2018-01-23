const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end' });
});

app.get('/login', (req, res) => {
  res.send({ express: 'backend: please enter your username and password' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
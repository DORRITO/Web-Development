const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const GM = require('./server/api/gm');
const Rychar = require('./server/api/rychar');
const Tylendel = require('./server/api/tylendel');
const Wolfbane = require('./server/api/wolfbane');


app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end'});
});

app.get('/login', (req, res) => {
  res.send({ express: 'backend: please enter your username and password' });
});

app.get('/players', (req, res) => {
  res.send({ GM, Rychar, Tylendel, Wolfbane });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
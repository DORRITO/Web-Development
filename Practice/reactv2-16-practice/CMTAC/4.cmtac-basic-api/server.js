const express = require('express');
const app = express();
const _ = require('lodash');
var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
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

// app.get('/players', (req, res) => {
//   res.send({ GM, Rychar, Tylendel, Wolfbane });
// });

app.route('/players')
  .get(function (req, res)  {
    res.send({ GM, Rychar, Tylendel, Wolfbane });
  })
  .patch(function (req, res)  {
    console.log('patch is working!')
    let body = _.pick(req.body, ['dice']);
    console.log(body, 'bodyyyy')
    console.log(body.dice, 'body.dice')
    // res.send({ GM, Rychar, Tylendel, Wolfbane });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
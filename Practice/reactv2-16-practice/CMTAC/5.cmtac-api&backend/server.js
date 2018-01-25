const express = require('express');
const app = express();
const _ = require('lodash');
var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

const Players = require('./server/api/players');
// const GM = require('./server/api/gm');
// const Rychar = require('./server/api/rychar');
// const Tylendel = require('./server/api/tylendel');
// const Wolfbane = require('./server/api/wolfbane');

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end'});
});

app.get('/login', (req, res) => {
  res.send({ express: 'backend: please enter your username and password' });
});

app.route('/players')
  .get(function (req, res)  {
    // console.log(req.query, 'query')
    console.log(Players)
    res.send({ Players });
    // res.send({ GM, Rychar, Tylendel, Wolfbane });
  })
  .patch(function (req, res)  {
    let user = req.query.name
    
    // let body = _.pick(req.query, ['name']);
    // console.log(body, 'body from pick');
    Players.GM.name = req.query.name
    res.send({ Players });
    // res.send({ GM, Rychar, Tylendel, Wolfbane });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
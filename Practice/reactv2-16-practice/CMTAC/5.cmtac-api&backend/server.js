const express = require('express');
const app = express();
const _ = require('lodash');
var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

const playersAPI = require('./server/api/players');
const Players = playersAPI.Players;

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
    res.send({ Players });
    // res.send({ GM, Rychar, Tylendel, Wolfbane });
  })
  .patch(function (req, res)  {
    let userInfo = req.query;
    let name = userInfo.name;
    let dice = userInfo.dice;
    // console.log(userInfo, name, dice);
    console.log(Players.GM.dice, 'before!');
    // console.log(Players[name].dice);
    Players[name].dice = dice;
    console.log(Players.GM.dice, 'after!');
    // console.log(Players.userName.userDice);

    // console.log(Players)
    
    // let body = _.pick(req.query, ['name', 'dice']);
    // console.log(body, 'body from pick');
    // Players.GM.name = req.query.name
    // res.send({ Players });
    // res.send({ GM, Rychar, Tylendel, Wolfbane });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
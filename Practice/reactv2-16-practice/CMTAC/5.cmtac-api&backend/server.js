const express = require('express');
const app = express();
var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //use built in promise library
mongoose.connect('mongodb://localhost:27017/CMTAC');
var bodyParser = require('body-parser');
const _ = require('lodash');


// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

let {Players} = require('./server/models/players');
const playersAPI = require('./server/api/players');
// const Players = playersAPI.Players;

// Players.find({}, function(err, players) {
//   if (err) throw err;

//   // object of all the users
//   console.log(players);
// });

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

    Players[name].dice = dice;
    console.log(Players.GM.dice, 'after!');
    
    // let body = _.pick(req.query, ['name', 'dice']);
    // console.log(body, 'body from pick');
    res.send({ Players });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
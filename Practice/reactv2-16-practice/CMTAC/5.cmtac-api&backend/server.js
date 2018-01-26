const express = require('express');
const app = express();
var mongoose = require('mongoose');

var {mongoose} = require('./server/db/mongoose');
var bodyParser = require('body-parser');
const _ = require('lodash');


// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

let {PlayersAPI} = require('./server/models/players');

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end'});
});

app.get('/login', (req, res) => {
  res.send({ express: 'backend: please enter your username and password' });
});

app.route('/players')
  .get(function (req, res)  {

    PlayersAPI.find().then((players) => {
      // console.log(players[0].Players);
      if(!players){return res.status(404).send()}
    
      console.log(players[0].Players);
      res.send( players[0].Players );
    })
  })
  .patch(function (req, res)  {

    // let userInfo = req.query;
    // let name = userInfo.name;
    // let dice = userInfo.dice;

    // Players[name].dice = dice;
    // console.log(Players.GM.dice, 'after!');
    
    // let body = _.pick(req.query, ['name', 'dice']);
    // console.log(body, 'body from pick');
    // res.send({ Players });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
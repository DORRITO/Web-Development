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
PlayersAPI.findOne({_id: '123' }).then((player) => {console.log(player)})

app.get('/home', (req, res) => {
  res.send({ express: 'this is the home page from the back end'});
});

app.get('/login', (req, res) => {
  res.send({ express: 'backend: please enter your username and password' });
});

app.route('/players')
  .get(function (req, res)  {
    PlayersAPI.find().then((players) => {
      if(!players){return res.status(404).send()}
    
      res.send( players[0].Players );
    })
  })
  .patch(function (req, res)  {
    // let body = _.pick(req.body, ['name', 'dice']);
    // let userInfo = req.query; //query if using url string
    let name = req.body.name;
    let dice = req.body.dice;

    PlayersAPI.findOne({name, dice}).then((players) => {
      if(!players){return res.status(404).send()}
      
      res.send( players[0].Players );
    })
    // Players[name].dice = dice;
    // console.log(Players.GM.dice, 'after!');
    
    // res.send({ Players });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
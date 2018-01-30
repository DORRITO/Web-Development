const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const {mongoose} = require('./server/db/mongoose');
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
app.use(express.static(`${__dirname}/client/build`));

const {generateMessage} = require('./server/utils/message');
let {PlayersAPI} = require('./server/models/players');

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  })

  socket.on('disconnect', () => {console.log('user was disconnected')});
});

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
    // let userInfo = req.query; //query if using url string
    let name = req.body.name;
    let dice = req.body.dice;

    let diceRoll = `Players.${name}.dice`;
    let set = {}; 
    set[diceRoll] = dice; //have to do this to set variables
    // PlayersAPI.findOneAndUpdate({_id: 123 }, {$set: set}, {new: true} ).then((player) => {console.log(player)})
    // PlayersAPI.findOneAndUpdate({_id: 123 }, {$set: {"Players.GM.dice": "123"}}, {new: true} ).then((player) => {console.log(player)})
    PlayersAPI.findOneAndUpdate({_id: 123}, {$set: set}, {new: true}).then((players) => {
      if(!players){return res.status(404).send()};
      res.send( players.Players );
    }).catch((e) => { res.status(400).send()});
  })

server.listen(port, () => console.log(`Listening on port ${port}`));
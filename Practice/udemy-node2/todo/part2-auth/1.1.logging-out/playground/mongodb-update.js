// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('TodoApp').findOneAndUpdate({
    _id: new ObjectID('5a587d88097f5a2ec729b2fd')}, 
    {$set: {tex: 'wash'}, $inc: {age: 1}}, 
    {returnOriginal: false}
  ).then((result) => {
      console.log(result);
    });

  // client.close();
});

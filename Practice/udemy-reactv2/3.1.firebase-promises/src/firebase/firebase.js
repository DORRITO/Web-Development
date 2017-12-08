import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCXDJQdE5T8ea6wYhQXty7noaK-L0jTTkA",
    authDomain: "expensify-f6f19.firebaseapp.com",
    databaseURL: "https://expensify-f6f19.firebaseio.com",
    projectId: "expensify-f6f19",
    storageBucket: "expensify-f6f19.appspot.com",
    messagingSenderId: "94075439417"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Chip',
    age: 26,
    isSingle: false,
    location: {
        city: 'Philadelphia',
        country: 'US'
    }
});

// database.ref().set('nyahh see');

database.ref('age').set(27);
database.ref('location/city').set('new york');

database.ref('attributes').set({
    height: 2,
    weight: 'nada'
});
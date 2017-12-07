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

firebase.database().ref().set({
    name: 'Chip'
});
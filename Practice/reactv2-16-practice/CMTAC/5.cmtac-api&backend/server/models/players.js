let mongoose = require('mongoose');

let Players = mongoose.model('Players', {
    Players: {
      type: Object,
      required: true,
    }
});
  
// let newPlayers = new Players({
//     Players: {
//         Rychar:{
//             name: 'Rychar',
//             dice: '',
//             login: 'rychar',
//             password: '',
//             loggedIn: false
//         },
//         Tylendel: {
//             name: 'Tylendel',
//             dice: '',
//             login: 'tylendel',
//             password: 'fishface',
//             loggedIn: false
//         },
//         Wolfbane: {
//             name: 'Wolfbane',
//             dice: '',
//             login: 'wolfbane',
//             password: 'reygan',
//             loggedIn: false
//         }, 
//         GM : {
//             name: 'GM',
//             dice: '',
//             login: 'gm',
//             password: '123',
//             loggedIn: false
//         }    
//     }
// });

// newPlayers.save().then((doc) => {
//     console.log('saved players', doc)
// }, (e) => {
//     console.log('unable to save players')
// });

module.exports = {Players};
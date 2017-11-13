import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
// import {Tracker} from 'meteor/tracker';

import {App} from '../imports/ui/MainApp/App';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';


Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});

/////////////stateless component practice////////////
//<MyComponent name="CHIp"/>
// import React from 'react';
// const MyComponent = (props) => {
//   return(<div><h1>MyComponent is here! {props.name}</h1></div>);
// };

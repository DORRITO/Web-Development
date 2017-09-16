import { Meteor } from 'meteor/meteor';
//webapp allows you to attach middleware
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
            //request comes in //run middleware one at a time  //send them that page!
  WebApp.connectHandlers.use((req, res, next) => {
    console.log('this is from my custom middleware!');
    //url: url they typed  //method: get/put/post/delete   //headers:   //query: query string (like ?=123abc)
    console.log(req.url, req.method, req.headers, req.query);
    next();
  });
});

import { Meteor } from 'meteor/meteor';
//webapp allows you to attach middleware
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else {
      next()
    }
  });
  // code to run on server at startup
          //request comes in //run middleware one at a time  //send them that page!
  // WebApp.connectHandlers.use((req, res, next) => {
    // console.log('this is from my custom middleware!');
    //url: url they typed  //method: get/put/post/delete   //headers:   //query: query string (like ?=123abc)
    // console.log(req.url, req.method, req.headers, req.query);

    //What to do with res(ponse!)
    //set http status code
    // res.statusCode = 404; //for statuses! status-i?  httpstatuscodes.com
    //set http headers
    // res.setHeader('my-custom-header', 'CHIp was here(or http://www.blaa.com)');
    //set http body
    // res.write('<h1>this is the middleware taking over..at work!</h1>');  //writes to the body of the page
    //end http request
    // res.end();

    // next();
  // });
});

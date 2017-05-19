import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import '../imports/api/users';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  
});

  //code to run on server at startup
//   WebApp.connectHandlers.use((req, res, next) => {
//     console.log('this is from my custom middleware');
//     console.log(req.url, req.method, req.headers, req.query);
//     //Set HTTP status code
//     res.statusCode = 302;
//     //set HTTP headers
//     res.setHeader('Location', 'http://www.google.com');
//     // //Set HTTP body
//     // res.write('<h1>This is my middleware at work</h1>');
//     //end HTTP request
//     res.end();
//   });
// });
//req: request comes in
//res: run our middleware one at a time
//next: send them that page

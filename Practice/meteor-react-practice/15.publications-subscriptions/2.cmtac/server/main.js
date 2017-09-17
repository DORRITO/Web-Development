import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '../imports/startup/simple-schema-configuration.js';

import '../imports/api/users';
import {Links} from '../imports/api/links';

Meteor.startup(() => {
  // code to run on server at startup
});

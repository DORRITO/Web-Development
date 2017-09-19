import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '../imports/startup/simple-schema-configuration.js';

import {PicturesList} from '../imports/api/picturesAPI';
import '../imports/api/users';

Meteor.startup(() => {
  // code to run on server at startup
});

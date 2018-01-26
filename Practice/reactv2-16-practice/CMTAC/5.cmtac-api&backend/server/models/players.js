var mongoose = require('mongoose');

var Players = mongoose.model('Players', {
    Players: {
      type: Object,
      required: true,
    }
  });
  
  module.exports = {Players};
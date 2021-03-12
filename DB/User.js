const mongoose = require('mongoose');

const user = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  Papaya:{
    type: String
  }
});

module.exports = User = mongoose.model('papayas', user);

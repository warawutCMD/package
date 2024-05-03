// const mongoose = require('mongoose');

function connectMongoDB() {
    // Logic to connect to MongoDB
    console.log('Connected to MongoDB');
    // mongoose.connect('mongodb://localhost/my_database', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });
  }
  
  module.exports = {
    connectMongoDB
  };
  
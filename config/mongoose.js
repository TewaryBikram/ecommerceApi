const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect("mongodb+srv://bikrambscit:bikram123@cluster0.j7m8kkx.mongodb.net/", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
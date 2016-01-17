var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitblot');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

var imageSchema = mongoose.Schema({
  name: String,
  src: String
});

var Image = mongoose.model('Image', imageSchema);

var loadInitialData = function() {
  var data = require('./data.json');
  for (var i = 0; i < data.length; i++) {
    var criteria = {name: data[i].name};
    var update = {src: data[i].src};
    var options = {upsert: true};
    Image.findOneAndUpdate(criteria, update, options, function(err, image) {
      if (err) {
        throw err;
      }
      if (image) {
        //console.log('Updated image: ' + data[i].name);
      } else {
        //console.log('Created image: ' + data[i].name);
      }
    });
  }
};

loadInitialData();


/*
Image.find(function (err, images) {
  if (err) return console.error(err);
  console.log(images);
});
*/

/* // TODO: finish this; work in progress
var createUser = function() {

};

var saveData = function() {

};

var calculateResults = function(getData) {

};

var getUserData = function(user){

};
*/
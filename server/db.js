var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitblot');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

var imageSchema = mongoose.Schema({
  name: String
});

var Image = mongoose.model('Image', imageSchema);

var cat = new Image({ name: 'Cat' });
console.log(cat.name); // 'Silence'

var city = new Image({ name: 'city' });

city.save(function (err, city) {
  if (err) return console.error(err);
  console.log('saved city');

  Image.find(function (err, images) {
    if (err) return console.error(err);
    console.log(images);
  });
});

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
var express = require('express'); //include express.
var router = express.Router(); //router holds the return of the Router method of the express object.
//Router will help manage how incoming requests are handled.
var path = require('path'); //include path dependency (path will help serve files from server to client).

//var mongoose = require('mongoose'); //use installed mongoose dependency.
//mongoose.connect('mongodb://localhost/bitblotdb'); //connecting command to DB
//var userInput = mongoose.model('userInput',{name: String}); //data model to be sent to DB

router.get('/',function(req,res,next){ //next is how express handles middleware. User hits / and handler sends back main holding page (for all stuff): index.html.
  res.sendFile(path.join(__dirname,'../public/assets/views/index.html')); //static files are served via server/public folder.
});

router.post('/login', function(req, res) {
  console.log('logged in');
  res.send('this works.')// FIXME: implement
  //think of as connecting to a login "file" which will later be contained in DB.
});

router.get('/imageData', function(req, res) {
  console.log('got all image data');
  res.sendFile(path.join(__dirname,'../routes/images.json'))
});

router.put('/imageData/:id', function(req, res) {
  var id = req.params.id;
  res.send('helloyo');
  console.log('sending one image data to db: ' + id);
});

router.get('/results', function(req, res) { //this handler is looking through ALL users data (rather than 1).
  console.log('results!');
  res.json({
    name: 'bob'
  });
});

// additional routes needed:
// GET residual image info  (description, responses)
// PUT new image info
// GET results (average calculated) for all users

module.exports = router; //export order: tells router to exist as a module for use throughout rest of app.
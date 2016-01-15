var express = require('express'); //include express.
var router = express.Router(); //router holds the return of the Router method of the express object.
//Router will help manage how incoming requests are handled.
var path = require('path'); //include path dependency (path will help serve files from server to client).

//var mongoose = require('mongoose'); //use installed mongoose dependency.
//mongoose.connect('mongodb://localhost/bitblotdb'); //connecting command to DB
//var userInput = mongoose.model('userInput',{name: String}); //data model to be sent to DB

router.get('/',function(req,res,next){ //next is how express handles middleware.
  console.log('test');
  res.sendFile(path.join(__dirname,'../public/assets/views/index.html')); //static files are served via server/public folder.
});

// additional routes needed:
// GET residual image info  (description, responses)
// PUT new image info
// GET results

module.exports = router; //export order: tells router to exist as a module for use throughout rest of app.
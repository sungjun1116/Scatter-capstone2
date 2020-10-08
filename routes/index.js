// var express = require('express');
// var router = express.Router();
// require('./post.js');
// var app = express();

// app.set('view engine', 'ejs');


// // router.get('/', function (req, res, next) {
// //   var myVar = count;
// //   res.render('index', { myVar: myVar });
// // });


// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { myVar: 'Express' });
});

module.exports = router;
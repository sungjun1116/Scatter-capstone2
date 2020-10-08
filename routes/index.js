var express = require('express');
var router = express.Router();
require('./post.js');
var app = express();

app.set('view engine', 'ejs');
console.log(count);

router.get('/', function (req, res, next) {
  var myVar = count;
  res.render('index', { myVar: myVar });
});


module.exports = router;
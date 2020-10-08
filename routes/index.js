var express = require('express');
var router = express.Router();
require('./post.js');
var app = express();

app.set('view engine', 'ejs');

console.log('index로 잘 들어왔당께 :', count);
router.get('/', function (req, res, next) {
  var data = { name: "Hello World", age: 32 }
  res.render("index", data);
});


module.exports = router;
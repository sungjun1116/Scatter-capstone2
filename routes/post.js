var express = require('express');
var router = express.Router();
var fs = require('fs');


var cafe = { 'starbucks': 0, 'ediya': 0, 'azit': 0 };


router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var body;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbucks') {
    cafe.starbucks += 1;
    console.log(cafe.starbucks);
    body = `var starbucks = ${cafe.starbucks};`;
  } else if (paramId === 'ediya') {
    cafe.ediya += 1;
    console.log(cafe.ediya);
    body = `var ediya = ${cafe.ediya};`;
  } else if (paramId === 'azit') {
    cafe.azit += 1;
    console.log(cafe.azit);
    body = `var azit = ${cafe.azit};`;
  } else console.log('일치하는 아이디가 없습니다!');


  fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
    if (err === null) {
      console.log('success');
    }
    else { throw err; }
  });
  res.redirect('/');
});


module.exports = router;

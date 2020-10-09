var express = require('express');
var router = express.Router();
var fs = require('fs');


var cafe = { 'starbuks': 0, 'ediya': 0, 'azit': 0 };


router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var body;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbuks') {
    cafe.starbuks += 1;
    console.log(cafe.starbuks);
    body = `var starbuks = ${cafe.starbuks};`;
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

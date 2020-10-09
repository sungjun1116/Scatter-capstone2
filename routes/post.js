var express = require('express');
var router = express.Router();
var fs = require('fs');


var approve = { 'starbuks': 0, 'ediya': 0, 'azit': 0 };


router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var body;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbuks') {
    approve.starbuks += 1;
    console.log(approve.starbuks);
    body = `var starbuks = ${approve.starbuks};`;
  } else if (paramId === 'ediya') {
    approve.ediya += 1;
    console.log(approve.ediya);
    body = `var ediya = ${approve.ediya};`;
  } else if (paramId === 'azit') {
    approve.azit += 1;
    console.log(approve.azit);
    body = `var azit = ${approve.azit};`;
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

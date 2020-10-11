var express = require('express');
var router = express.Router();
var fs = require('fs');
require('../public/data/starbucks.js')
require('../public/data/ediya.js')
require('../public/data/azit.js')

var starbucks = global.starbucks;
var ediya = global.ediya;
var azit = global.azit;


router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var body;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbucks') {
    starbucks += 1;
    console.log(starbucks);
    body = `var starbucks = ${starbucks};`;
  } else if (paramId === 'ediya') {
    ediya += 1;
    console.log(ediya);
    body = `var ediya = ${ediya};`;
  } else if (paramId === 'azit') {
    azit += 1;
    console.log(azit);
    body = `var azit = ${azit};`;
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

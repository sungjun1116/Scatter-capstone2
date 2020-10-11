var express = require('express');
var router = express.Router();
var fs = require('fs');

let starbucks = 0;
let ediya = 0;
let azit = 0;

router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  let body;
  let target;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbucks') {
    target = starbucks += 1;
    console.log(starbucks);
    // body = `var ${paramId} = ${starbucks}`;
  } else if (paramId === 'ediya') {
    target = ediya += 1;
    console.log(ediya);
    // body = `var ${paramId} = ${ediya}`;
  } else if (paramId === 'azit') {
    target = azit += 1;
    console.log(azit);
    // body = `var ${paramId} = ${azit}`;
  } else console.log('일치하는 아이디가 없습니다!');


  body = `var ${paramId} = ${target}`;
  fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
    if (err === null) {
      console.log('success');
    }
    else { throw err; }
  });

  setTimeout(function () {
    target -= 1;
    body = `var ${paramId} = ${target}`;
    fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
      if (err === null) {
        console.log('success');
        console.log(`줄어든 값: ${target}`);
      }
      else { throw err; }
    });
  }, 10000)

  res.redirect('/');
});


module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');

let starbucks = 0;
let ediya = 0;
let azit = 0;

router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  let body;
  console.log(`id : ${paramId}`);
  if (paramId === 'starbucks') {
    starbucks += 1;
    console.log(starbucks);
    body = `var ${paramId} = ${starbucks}`;
  } else if (paramId === 'ediya') {
    ediya += 1;
    console.log(ediya);
    body = `var ${paramId} = ${ediya}`;
  } else if (paramId === 'azit') {
    azit += 1;
    console.log(azit);
    body = `var ${paramId} = ${azit}`;
  } else console.log('일치하는 아이디가 없습니다!');

  setTimeout(function () {
    starbucks -= 1;
    if (starbucks < 0) starbucks = 0;
    ediya -= 1;
    if (ediya < 0) ediya = 0;
    azit -= 1;
    if (azit < 0) azit = 0;
    fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
      if (err === null) {
        console.log('success');
      }
      else { throw err; }
    });
  }, 5000)

  res.redirect('/');
});


module.exports = router;

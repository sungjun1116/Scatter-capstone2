var express = require('express');
var router = express.Router();
var fs = require('fs');

let starbucks = 0;
let ediya = 0;
let azit = 0;

router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var lat = req.body.lat;
  var lng = req.body.lng;
  if (!(lat === null)) {
    console.log(lat);
    console.log(lng);
  }
  let description = `var new_lat = ${lat}; var new_lng = ${lng}`;
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
    target = azit += 1;
    console.log(azit);
    body = `var ${paramId} = ${azit}`;
  } else console.log('일치하는 아이디가 없습니다!');

  if (body !== "undefined") {
    fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
      if (err === null) {
        console.log('success');
      }
      else { throw err; }
    });
  }

  if (lat !== "undefined") {
    fs.writeFile(`./public/data/gps.js`, description, 'utf8', function (err) {
      if (err === null) {
        console.log('success gps');
      }
      else { throw err; }
    });
  }

  if (body !== "undefined") {
    setTimeout(function () {
      if (paramId === 'starbucks') {
        starbucks -= 1;
        console.log(`줄어든 값: ${starbucks}`);
        body = `var ${paramId} = ${starbucks}`;
      } else if (paramId === 'ediya') {
        ediya -= 1;
        console.log(`줄어든 값: ${ediya}`);
        body = `var ${paramId} = ${ediya}`;
      } else if (paramId === 'azit') {
        azit -= 1;
        console.log(`줄어든 값: ${azit}`);
        body = `var ${paramId} = ${azit}`;
      } else console.log('일치하는 값이 없습니다.');
      fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
        if (err === null) {
          console.log('성공');
        }
        else { throw err; }
      });
    }, 10000)
  }

  res.redirect('/');
});


module.exports = router;

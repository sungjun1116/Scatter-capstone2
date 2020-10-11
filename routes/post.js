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
  if (lat !== undefined) {
    console.log(lat);
    console.log(lng);
  }
  let description = `var x = ${lat}; var y = ${lng}`;
  let body = '';
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

  if (body !== ``) {
    fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
      if (err === null) {
        console.log('Writefile success');
      }
      else { throw err; }
    });
  }

  if (lat !== undefined) {
    fs.writeFile(`./public/data/gps.js`, description, 'utf8', function (err) {
      if (err === null) {
        console.log('Get GPS success');
      }
      else { throw err; }
    });
  }

  if (body !== ``) {
    setTimeout(function () {
      if (paramId === 'starbucks') {
        starbucks -= 1;
        console.log(`남은 이용객 수 : ${starbucks}`);
        body = `var ${paramId} = ${starbucks}`;
      } else if (paramId === 'ediya') {
        ediya -= 1;
        console.log(`남은 이용객 수: ${ediya}`);
        body = `var ${paramId} = ${ediya}`;
      } else if (paramId === 'azit') {
        azit -= 1;
        console.log(`남은 이용객 수: ${azit}`);
        body = `var ${paramId} = ${azit}`;
      } else console.log('일치하는 값이 없습니다.');
      fs.writeFile(`./public/data/${paramId}.js`, body, 'utf8', function (err) {
        if (err === null) {
          console.log('Update success');
        }
        else { throw err; }
      });
    }, 10000)
  }

  res.redirect('/');
});


module.exports = router;

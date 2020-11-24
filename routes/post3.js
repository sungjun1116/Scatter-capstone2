var express = require('express');
var router = express.Router();
var fs = require('fs');
let { time_restaurant } = require('../lib/date');

let r1 = 0;
let r2 = 0;
let r3 = 0;

router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var lat = req.body.lat;
  var lng = req.body.lng;
  // 현재위치로 가는 기능 구현
  if (lat !== undefined && lng !== undefined) {
    console.log(`현재 위도: ${lat}`);
    console.log(`현재 경도: ${lng}`);
    let description = `var x = ${lat}; var y = ${lng}`;
    fs.writeFile(`./public/data/gps.js`, description, 'utf8', function (err) {
      if (err === null) {
        console.log('Get GPS success');
      }
      else { throw err; }
    });
  }
  // writeFile 기능 구현
  else {
    let body = '';
    console.log(`id : ${paramId}`);
    if (paramId === 'r1') {
      r1 += 1;
      console.log(r1);
      body = `var ${paramId} = ${r1}`;
    } else if (paramId === 'r2') {
      r2 += 1;
      console.log(r2);
      body = `var ${paramId} = ${r2}`;
    } else if (paramId === 'r3') {
      target = r3 += 1;
      console.log(r3);
      body = `var ${paramId} = ${r3}`;
    } else console.log('일치하는 아이디가 없습니다!');
    if (body !== ``) {
      fs.writeFile(`./public/data/restaurant/${paramId}.js`, body, 'utf8', function (err) {
        if (err === null) {
          console.log('Writefile success');
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
        } else if (paramId === 'r2') {
          r2 -= 1;
          console.log(`남은 이용객 수: ${r2}`);
          body = `var ${paramId} = ${r2}`;
        } else if (paramId === 'r3') {
          r3 -= 1;
          console.log(`남은 이용객 수: ${r3}`);
          body = `var ${paramId} = ${azit}`;
        } else console.log('일치하는 값이 없습니다.');
        fs.writeFile(`./public/data/restaurant/${paramId}.js`, body, 'utf8', function (err) {
          if (err === null) {
            console.log('Update success');
          }
          else { throw err; }
        });
      }, time_restaurant)
    }
  }
  res.redirect('/');
});


module.exports = router;

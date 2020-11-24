var express = require('express');
var router = express.Router();
var fs = require('fs');
let { time_gym } = require('../lib/date');

let gym1 = 0;
let gym2 = 0;
let gym3 = 0;

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
    if (paramId === 'gym1') {
      gym1 += 1;
      console.log(gym1);
      body = `var ${paramId} = ${gym1}`;
    } else if (paramId === 'gym2') {
      gym2 += 1;
      console.log(gym2);
      body = `var ${paramId} = ${gym2}`;
    } else if (paramId === 'gym3') {
      target = gym3 += 1;
      console.log(gym3);
      body = `var ${paramId} = ${gym3}`;
    } else console.log('일치하는 아이디가 없습니다!');
    if (body !== ``) {
      fs.writeFile(`./public/data/gym/${paramId}.js`, body, 'utf8', function (err) {
        if (err === null) {
          console.log('Writefile success');
        }
        else { throw err; }
      });
    }
    if (body !== ``) {
      setTimeout(function () {
        if (paramId === 'gym1') {
          gym1 -= 1;
          console.log(`남은 이용객 수 : ${gym1}`);
          body = `var ${paramId} = ${gym1}`;
        } else if (paramId === 'gym2') {
          gym2 -= 1;
          console.log(`남은 이용객 수: ${gym2}`);
          body = `var ${paramId} = ${gym2}`;
        } else if (paramId === 'gym3') {
          gym3 -= 1;
          console.log(`남은 이용객 수: ${gym3}`);
          body = `var ${paramId} = ${gym3}`;
        } else console.log('일치하는 값이 없습니다.');
        fs.writeFile(`./public/data/gym/${paramId}.js`, body, 'utf8', function (err) {
          if (err === null) {
            console.log('Update success');
          }
          else { throw err; }
        });
      }, time_gym)
    }
  }
  res.redirect('/');
});


module.exports = router;

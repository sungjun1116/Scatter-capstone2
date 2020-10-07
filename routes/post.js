var express = require('express');
var router = express.Router();
var count = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };

router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  console.log(`id : ${paramId}`);

  //아이디 일치여부 flag json 데이터입니다.
  if (paramId === 'admin1') {
    count.admin1 += 1;
    console.log(count.admin1);
  } else if (paramId === 'admin2') {
    count.admin2 += 1;
    console.log(count.admin2);
  } else if (paramId === 'admin3') {
    count.admin3 += 1;
    console.log(count.admin3);
  } else console.log('일치하는 아이디가 없습니다!');
  res.send(count);
});

global.count = count;

module.exports = router;

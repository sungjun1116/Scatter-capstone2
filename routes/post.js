var express = require('express');
var router = express.Router();
var approve = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };

router.post('/', function (req, res, next) {
  console.log('첫 번째 미들웨어 호출 됨');

  var paramId = req.body.item;
  console.log(`id : ${paramId}`);

  //아이디 일치여부 flag json 데이터입니다.
  if (paramId === 'admin1') {
    approve.admin1 += 1;
    console.log(approve.admin1);
  } else if (paramId === 'admin2') {
    approve.admin2 += 1;
    console.log(approve.admin2);
  } else if (paramId === 'admin3') {
    approve.admin3 += 1;
    console.log(aprove.admin3);
  } else console.log('일치하는 아이디가 없습니다!');
  res.send(approve);
});

module.exports = router;  
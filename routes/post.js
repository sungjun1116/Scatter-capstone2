var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  console.log('첫 번째 미들웨어 호출 됨');
  var approve = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };

  var paramId = req.body.item;
  console.log(`id : ${paramId}`);

  //아이디 일치여부 flag json 데이터입니다.
  if (paramId == 'admin1') {
    approve.admin1 += 1;
    console.log(approve.admin1);
  }
  res.send(approve);
});

module.exports = router;
var express = require('express');
var router = express.Router();
var fs = require('fs');


var approve = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };


router.post('/', function (req, res, next) {
  var paramId = req.body.item;
  var description;
  console.log(`id : ${paramId}`);

  //아이디 일치여부 flag json 데이터입니다.
  if (paramId === 'admin1') {
    approve.admin1 += 1;
    console.log(approve.admin1);
    description = `var admin1 = approve.admin1;`;
    console.log(description);
  } else if (paramId === 'admin2') {
    approve.admin2 += 1;
    console.log(approve.admin2);
    description = `var admin2 = approve.admin2;`;
    console.log(description);
  } else if (paramId === 'admin3') {
    approve.admin3 += 1;
    console.log(aprove.admin3);
    description = `var admin3 = approve.admin3;`;
    console.log(description);
  } else console.log('일치하는 아이디가 없습니다!');

  // fs.writeFileSync(`../public/data/${getInfo}.js`, description, 'utf8', function (err) {
  //   if (err === null) {
  //     console.log('success');
  //   }
  //   else { console.log('fail'); }
  // });
  res.send(1);
});


module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');


var count = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };


router.post('/', function (req, res, next) {
  let getInfo = req.body.item;
  console.log(`id : ${getInfo}`);
  if (getInfo === 'admin1') {
    count.admin1 += 1;
    description = `var admin1 = ${count.admin1}`;
    console.log(description);
  } else if (getInfo === 'admin2') {
    count.admin2 += 1;
    description = `var admin1 = ${count.admin2}`;
    console.log(description);
  } else if (getInfo === 'admin3') {
    count.admin3 += 1;
    description = `var admin1 = ${count.admin3}`;
    console.log(description);
  } else {
    description = 1000;
  }
  fs.writeFileSync(`../public/data/${getInfo}.js`, description, 'utf8', function (err) {
    if (err === null) {
      console.log('success');
    }
    else { console.log('fail'); }
  });
  res.send(html);
});


module.exports = router;

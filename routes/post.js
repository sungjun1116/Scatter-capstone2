var express = require('express');
var router = express.Router();


var count = { 'admin1': 0, 'admin2': 0, 'admin3': 0 };


router.post('/', function (req, res, next) {
  let getInfo = req.body.item;
  console.log(`id : ${getInfo}`);
  if (getInfo === 'admin1') {
    count.admin1 += 1;
    description = `var admin1 = ${count.admin1}`;
  } else if (getInfo === 'admin2') {
    count.admin2 += 1;
    description = `var admin1 = ${count.admin2}`;
  } else if (getInfo === 'admin3') {
    count.admin3 += 1;
    description = `var admin1 = ${count.admin3}`;
  } else {
    description = 1000;
  }
  fs.writeFile(`../public/data/${getInfo}.js`, description, 'utf8', function (err) {
    if (err) {
      console.log(err);
      res.status(500).send('writeFile 실패');
    }
    console.log(description);
    res.send('')
  });
});

module.exports = router;

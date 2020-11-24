var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
var date = moment().format('HH');
let time_cafe;
let time_gym = 1000 * 90;
let time_restaurant;


if (date >= 00 && date <= 09) {
  time_cafe = 1000 * 30;
  time_restaurant = 1000 * 30;
}
else if (date <= 15) {
  time_cafe = 1000 * 45;
  time_restaurant = 1000 * 30;
}
else if (date <= 18) {
  time_cafe = 1000 * 90;
  time_restaurant = 1000 * 60;
}
else if (date <= 21) {
  time_cafe = 1000 * 60;
  time_restaurant = 1000 * 90;
}
else {
  time_cafe = 1000 * 50;
  time_restaurant = 1000 * 30;
}

module.exports = { time_cafe, time_gym, time_restaurant };
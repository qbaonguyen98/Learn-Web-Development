var moment = require('moment');

var futurePoint = moment('2019-08-10 04:00');
console.log(futurePoint.fromNow());         // current time: 23:05  08/04/2019 => in 5 days

console.log(futurePoint.format('YYYY/MM/DD-HH:MM'));       // change time display format

// đọc thêm về moment-js trên MDN
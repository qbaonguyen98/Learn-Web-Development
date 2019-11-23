var readLineSync = require('readline-sync');                        // include module phải để đầu tiên trong code

var name = readLineSync.question('May I have your name? ');
console.log('Hi' + name + '!');
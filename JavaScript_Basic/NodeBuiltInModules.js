// File System (fs) => https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

var fs = require('fs');         //require built-in module, chỉ cần require tên nó

//example 1:    read file  
var text = fs.readFileSync('./Useful_Links.txt', {encoding: 'utf8'});
console.log(text);

//example 2:    write file
fs.writeFileSync('./fsWriteFileSyncExample.txt', 'Reus Nguyen');
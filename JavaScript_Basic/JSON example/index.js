var fs = require('fs');
var readlineSync = require('readline-sync');

console.log('Choose your prefer option: ');
console.log('   1. Show all students');
console.log('   2. Create a new student');

var option = readlineSync.question('Your choice is ? ');
if (option === '1'){
    var students = fs.readFileSync('./data.json', {encoding: 'utf8'});
    console.log(students);
}
else if(option === '2'){
    var name = readlineSync.question('Student name ? ');
    var age = readlineSync.question('Student age ? ');
    var major = readlineSync.question('Student major ? ');
    var newStudent = {
        name: name,
        age: age,
        major: major
    };
    newStudentData = JSON.stringify(newStudent);
    fs.writeFileSync('./data.json', newStudentData);
    console.log('Saved');
}
else{
    console.log('Invalid option !');
}


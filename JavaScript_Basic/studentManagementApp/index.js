// Requirement:
// App is able to:
//  - Show current student list
//  - Add new students

// 3 options:
//              1. Show all students
//              2. Create a new student
//              3. Save & Exit 

var readline = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1. Show all students');
    console.log('2. Create new student');
    console.log('3. Save & exit');
    var option = readline.question('Your choice is > ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            createStudent();
            showStudents();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Invalid option !');
            showMenu();
    }
}

function showStudents(){
    for (var student of students){
        console.log(student.name, student.age, student.gender);
    }
}

function createStudent(){
    var name = readline.question('Enter student name: ');
    var age = readline.question('Enter student age: ');
    var gender = readline.question('Enter student gender: ');
    var student = {
        name: name,
        age: age,
        gender: gender
    };
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', students);
}

function main(){
    loadData();
    showMenu();
    var option = readline.question('Your choice is > ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            createStudent();
            showStudents();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Invalid option !');
            showMenu();
    }
}

main();
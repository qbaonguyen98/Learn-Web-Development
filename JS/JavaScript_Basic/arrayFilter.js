// lọc ra các phần tử trong 1 array không thỏa điều kiện (filter function) cho trước
// trả về array mới gồm các phần tử thỏa mãn

// SYNTAX:
/*
            arr.filter(function(item){
                //code to filter
                return x;    // true or false
            });
*/

// example 1
var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter(function(x){
    return x % 2 === 0;
});

console.log(evenNumbers);

// example 2
var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
	var femaleStudents = members.filter(function(student){
  	return student.gender !== 'female';
  });
  return femaleStudents;
}
for (var femaleStudent of filterOutFemales(members)){
    console.log(femaleStudent);
}

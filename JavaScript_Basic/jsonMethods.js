// stringify    =>  convert an object to JSON string
// parse        =>  convert a JSON string to an object

// example
var myDog = {
    name: 'Milu',
    age: 1,
    dead: false
};
console.log(typeof(myDog), ': ', myDog);

var myDogString = JSON.stringify(myDog);
console.log(typeof(myDogString), ': ', myDogString);

console.log(myDogString.name);                  // undefined
console.log(JSON.parse(myDogString).name);      // Milu

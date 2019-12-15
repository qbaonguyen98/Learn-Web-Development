// SIMPLE FOR
console.log ('*** SIMPLE FOR ***'); 
/*
        for (init; condition; final-expression){
            //code;
        }
 */

// example 1
for (i=0; i<5; i++){
    console.log(i);
}

console.log('-------------------------------------------------');
// example 2
var employees = [
    {name: 'Marco', age: 30},
    {name: 'Mats', age: 29},
    {name: 'Roman', age: 27}
];
for (i=0; i<3; i++){
    console.log(employees[i].name);
}

console.log('-------------------------------------------------');
// FOR...OF >>>> used for array
console.log ('*** FOR...OF ***', '\r\n');
for (var singleEmployee of employees){
    console.log(singleEmployee.name);
}

console.log('-------------------------------------------------');
// FOR...IN >>>> used for object
console.log ('*** FOR...IN ***', '\r\n');
var myDog = {
    name: 'Milu',
    type: 'corgi',
    age: 2
};
for (var dogProperties in myDog){
    console.log(dogProperties, ': ', myDog[dogProperties])
                    //key                   value

    // return "undefined" if use: myDog['dogProperties']
} 

// WHILE                => giống trong C

// DO...WHILE           => giống trong C
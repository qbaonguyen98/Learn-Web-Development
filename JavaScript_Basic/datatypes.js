/*
    Data types:
        Primitive types:
            - Number
            - String
            - Boolean
        Special types:
            - undefined
            - null
        Reference types:
            - Array
            - Object
*/

// Number
var a = -100;
var b = 0.5;
console.log(a,b);

// String
var name = 'Nguyen Quoc Bao';
var quote = 'Albert Enstein: \'Imagination is more important than knowledge\'';  
//                           '\' is called escape a character technique
console.log(name, quote);

// Boolean (true, false)
var isHidden = false;
console.log(isHidden);

// undefined
var a1;
console.log(a1);

// null
var a = null;
console.log(a);

// object
var emptyObject = {};
console.log(emptyObject);

var myPhone = {
    name: 'Nokia 6.1',
    brand: 'Nokia',
    os: 'Android One',
    releasedDate: '7/7/2017'
};
console.log(myPhone.name, myPhone.os);
console.log(myPhone['name'], myPhone['os']);

// we can also change object properties
myPhone.name = 'Nokia 9 Pure View';
console.log(myPhone.name, myPhone.os);

// array
var evenNumbers = [0,2,4,6];
console.log(evenNumbers);
console.log(evenNumbers[2]);

// array of objects
var dog1 = {
    type: 'corgi'
};
var dog2 = {
    type: 'husky'
};
var dog3 = {
    name: 'milu',
    type: 'tea cup'
};

var bunchOfDogs = [dog1, dog2, dog3];
console.log(bunchOfDogs[2].name);

// change element in array
var dog4 = {
    type: 'di cho'
}
bunchOfDogs[0] = dog4;
console.log(bunchOfDogs[0].type);


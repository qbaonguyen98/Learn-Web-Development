// example 1
function factorial (x){
    // Termination
    if (x<0) return;

    // Base
    if (x===0) return 1;

    // Recursion
    return x * factorial(x-1);
}
console.log('example 1: ',factorial(3));

// example 2
function reverseStr (str){
    // Base and Termination
    if (str === '') return '';

    // Recursion
    return reverseStr(str.substr(1)) + str[0];
    // the 'substr' method returns a string beginning at the specified location
}
/*
    1: return   reverseStr('eus') + R
    2: return   reverseStr('us') + e + R
    ...
 */
console.log('example 2: ',reverseStr('Reus'));

// example 3
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
};
function printKeys (obj){
    for (var ele in obj){
    console.log('           ',ele);
    }
    //base and termination
    if (typeof(obj[ele.toString()]) !== 'object') return;
  
    //recursion
    return printKeys(obj[ele.toString()]);
}
console.log('example 3: ');
printKeys(apartment);

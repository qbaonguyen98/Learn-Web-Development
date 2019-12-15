// make New string from n character top and bottom from old string
// example:
//          newString('Describe', 2)   =>  'Debe'

function newString(str, n){
    var part1 = str.slice(0, n);
    var part2 = str.slice(str.length - n);
    return (part1 + part2); 
}

console.log(newString('describle',2));

console.log(newString('describle',5));
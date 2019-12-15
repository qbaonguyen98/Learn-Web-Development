var a = 5;
var b = 10;

// prefix and postfix in decrement and increment operate similarly

console.log("POSTFIX");
console.log(a++);   // 5
console.log(a);     // 6

console.log("PREFIX");
console.log(--b);   // 9
console.log(b);   // 9

var s = a++ * b-- + --a * ++b;  // 6*9 + 6*9
console.log(s);
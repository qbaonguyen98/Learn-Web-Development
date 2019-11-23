/*      function doSomeThing (input1, input2,...){
            //code
            return someThing;
        }
 */

function calculateTriangleSquare(a, h){
    return a*h/2;
}

console.log(calculateTriangleSquare(10,20));

// if a function have no name => anonymous function
var a = function() {
    console.log('This is an anonymous function');
}
a;



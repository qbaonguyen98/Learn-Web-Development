// scope: phạm vi hoạt động của biến
// - global scope
// - local scope

var a = 11;          // 

function testFunc(){
    var b = 19;
    console.log(b);         
    console.log(a);         
    a = 3;
}

testFunc();         // 19
                    // 11
console.log(a);     // 3

// console.log(b);     // undefined

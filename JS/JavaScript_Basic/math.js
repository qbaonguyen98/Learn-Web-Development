// một số property và methods phổ biến trong math
/*
        Math.PI
        Math.ceil(num)
        Math.floor(num)
        Math.round(num)
        Math.max(x1, x2, ...)
        Math.min(X1, x2, ...)
        Math.random()               range from 0 to 1
*/
console.log(Math.PI);
console.log(Math.ceil(9.2));    //10
console.log(Math.floor(9.8));    //9

console.log(Math.max(10, 20, 4));   //20
console.log(Math.max(-10, 20, 4));   //-10

console.log(Math.random());
console.log(Math.random());

// examle => lắc xúc xắc
function rollADie(){
    return Math.round(Math.random() * 6); 
}
console.log(rollADie());
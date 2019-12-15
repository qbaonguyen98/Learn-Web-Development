// nhập vào 2 số, trả về số gần 100 hơn
function nearestTo100(a, b){
    if (Math.abs(a-100) > Math.abs(b-100))  return b;
    return a;
}

console.log(nearestTo100(89,170));
// Viết hàm đảo ngược chuỗi

function reverse(str) {
    var len = str.length;
    var temp = [];
    for (i=len-1; i>-1; i--){
        temp.push(str[i]);
    }
    return temp.join('');
}

console.log(reverse('Nguyen Quoc Bao'));

//cách 2:

function reverseString(str) {
    return str.split('').reverse().join('');  // spit() tách từng chữ thành từng phần tử trong 1 array
}
console.log(reverseString('hello'));


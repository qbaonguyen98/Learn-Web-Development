// Viet ham 'hasKey' kiem tra object co ton tai 1 key cho truoc khong
function hasKey (obj, key){
    var result = false;
    for (var objKey in obj){
        if (objKey === key)
            result = true;
    }
    return result;
}

var myDog = {
    name: 'Milu',
    type: 'corgi',
    age: 1
}

console.log(hasKey(myDog, 'weight'));
console.log(hasKey(myDog, 'age'));

// Viết 1 ham xóa đi n phần tử cuối cùng của 1 array
function removeEnd(arr, n){
    return arr.slice(0, (arr.length-n));
}
console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));
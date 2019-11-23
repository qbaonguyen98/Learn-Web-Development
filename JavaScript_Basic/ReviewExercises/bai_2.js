// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu

function capitalize(str) {
    var strArray = str.split('');
    strArray[0] = strArray[0].toUpperCase();
    for (i=0; i<strArray.length; i++){
        if (strArray[i] === ' '){
            strArray[i+1] = strArray[i+1].toUpperCase();
        }
    }
    return strArray.join('');
}

console.log(capitalize('nguyen quoc bao reus nguyen'))


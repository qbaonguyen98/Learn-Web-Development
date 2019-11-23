function toNextChar(str) {
    // Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó
    // trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
    // Tham số:
    // - String: chuỗi nhập vào ban đầu.
    var strArr = str.split('');
    var temp = strArr.map(function(char){
        var newASCII = char.charCodeAt(0) + 1;
        return String.fromCharCode(newASCII);
    });
    return temp.join('')
}

console.log(toNextChar('Hello'));
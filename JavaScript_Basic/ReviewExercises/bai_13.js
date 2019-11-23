function pyString(str) {
    // Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
    // Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
    // Tham số:
    // - String: chuỗi nhập vào lúc đầu.
    if (str.slice(0,2) == 'Py') return str;
    return 'Py'.concat(str);
}

console.log(pyString("Coders Tokyo"));

console.log(pyString('PyHello'));
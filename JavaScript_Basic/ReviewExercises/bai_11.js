function checkInt(number1, number2) {
    // Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. Nếu có 1 số âm và một số dương
    // thì trả về true. Các trường hợp khác trả về false. Số 0 là số không âm cũng không dương
    // Tham số:
    // - number1: số nguyên thứ nhất
    // - number2: số nguyên thứ hai
    if (number1*number2 < 0)    return true;
    return false;
}

console.log(checkInt(-1, 2));
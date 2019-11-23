function difference(n) {
    // Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, nếu số đó lớn hơn 13
    // trả về gấp đôi tuyệt đối của hiệu 2 số.
    if (n <= 13)    return Math.abs(n - 13);
    return 2 * Math.abs(n - 13);
}

console.log(difference(3));

console.log(difference(20));
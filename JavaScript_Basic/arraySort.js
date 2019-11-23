// sắp xếp các phần tử trong arrar và trả về sorted array

//SYNTAX:
/*
            arr.sort(function(a, b){
                if (a is less than b by some ordering criterion) {
                    return -1;  // or anything < 0
                }
                if (a is greater than b by the ordering criterion) {
                    return 1;   // or anything > 0
                }
                // a must be equal to b
                return 0;
            });
        compare function return:
            -1 >>> a trước b
            1  >>> b trước a
            0  >>> như cũ

    => nếu không truyền function: sort(), các phần tử sẽ được convert to string
    và sắp xếp theo mã UTF-8 (thứ tự alphabet), các phần tử undefined được đặt cuối cùng
*/

// example 1:
var numbers = [1, 43, 2, 17, 9, 32];
var ascNumbers = numbers.sort(function(a, b){
    return a - b;           // a > b => lớn hơn 0 > b trước a     => số nhỏ đưa lên trước 
});                         // a < b => nhỏ hơn 0 > a trước b

console.log(ascNumbers);

// example 2:
var employees = [
    {name: 'Tí', age: 18},
    {name: 'Tèo', age: 20},
    {name: 'Maria', age: 19}
];
var sortedEmployees = employees.sort(function(a, b){       // based on age
    return a.age - b.age;
});
for (var ele of sortedEmployees){
    console.log(ele);
}





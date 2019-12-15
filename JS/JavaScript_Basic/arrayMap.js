/*
    biến các phần tử của một array thành các phần tử mới
    theo một quy tắc nào đó, được định nghĩa bởi một function
*/
// SYNTAX:
/*
                arr.map(function(item)){
                    //code to transform
                    return newValue;
                });
*/

// example 1
var numbers = [1, 2, 3, 4];
var squareNumbers = numbers.map(function(x){
    return x*x;
});

console.log(squareNumbers);

// example 2
var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
]
// dùng map để tạo 1 array mới gồm các phần tử là diện tích các hình trên
var rectanglesArea = rectangles.map(function(rect){
    return (rect.width)*(rect.height);
});

console.log(rectanglesArea);
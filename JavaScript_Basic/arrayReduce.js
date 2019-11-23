/*  mô tả cách hoạt động, giả sử array cho trước là:
        arr = [x1, x2, x3, x4, ...];
    
    - lấy x1, x2 quăng vào reduce function, kết quả trả về là y1
    - lấy y1, x3 quăng vào reduce function, kết quả trả về là y2
    - lấy y2, x4 bỏ vào....
*/

//SYNTAX:
/*
            arr.reduce(function(item1, item2){
                //calculation
                return x;
            });                                      => ngoài reducefunction(i1, i2), có thể truyền vào 1 tham số
                                                             nữa khi sử dụng method reduce, VD phía dưới            
*/

// example 1
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
});
console.log(sum);

//example 2
var orders = [
    {name: 'Mango', quantity: 4, unitPrice: 50},
    {name: 'BlueBerry', quantity: 10, unitPrice: 100},
    {name: 'Coconut', quantity: 2, unitPrice: 80}
];
// dùng reduce tính tổng đơn hàng

// var money = orders.reduce(function(item1, item2){
//     item1Price = item1.quantity * item1.unitPrice; 
//     item2Price = item2.quantity * item2.unitPrice;      => SAI: return number sau đó lại để vô 
//     console.log(typeof(item1Price + item2Price));                    tham số được xử lý theo object
//     return (item1Price + item2Price);
// }); 
// console.log('Total money: ', money);

var money = orders.reduce(function(item1, item2){
    if (typeof(item1) === 'object'){
        var item1Price = item1.quantity * item1.unitPrice; 
    }
    else    var item1Price = item1;
    item2Price = item2.quantity * item2.unitPrice;        
    return (item1Price + item2Price);
}); 
console.log('Total money: ', money);

// example 3:   USE 2 PARAMETERS
//SYNTAX:
/*
            arr.reduce(function(item1, item2){
                //calculation
                return x;
            }, init);                              => at first, item1 = init AND item2 = phần tử đầu tiên của mảng
*/
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
}, 1);
console.log(sum);

// example 4:
var money = orders.reduce(function(currentTotal, item){
    return currentTotal + item.unitPrice * item.quantity;
}, 0); 
console.log('Total money: ', money);

// example 5:
var items = ['Tom', 'Bill', 'Steve']
// 1: use reduce to make this result: '<Tom><Bill><Steve>'
var result1 = items.reduce(function(init, item){
    return init + item + '><';
}, '<');
console.log(result1.slice(0, (result1.length-1)));
// 2: use map and join
var result2 = items.map(function(item){
    return '<' + item + '>';
});
console.log(result2.join(''));

// example 6:
// Count the occurrences of each element inside an array using reduce
function countOccurences(array)
{
  var object = array.reduce(function(x,y){        // x will be an object containing char occurences
      if(x[y] === undefined)
        x[y] = 1;                                 
      else
        x[y]++;
      return x;
  },{});
  return object;
}

console.log(countOccurences(['a', 'b', 'c', 'b', 'a', 'k', 'e', 'm', 'k']));
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }


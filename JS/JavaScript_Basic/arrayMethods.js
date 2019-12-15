var a = ['cat', 'dog', 'fish'];
var b = [1, 5, 9, 11];
/*****************************  ACCESSOR METHODS  ****************************/
/*
      join(separator):  
                kết hợp các phần tử trong array thành 1 string và trả về string đó
                array ban đầu không đổi
            - separator (optional): kí tự chen vào giữa những phần tử được kết hợp, 
                        nếu không gán, kí tự mặc định là dấu ,
 */
console.log(a.join());              
console.log(a.join('--'));
console.log(a.join(''));

/*
      concat(a1, a2..):
                kết hợp 2 hay nhiều array và trả về 1 array mới
                2 array ban đầu không thay đổi
 */
console.log(a.concat(b));
console.log(b.concat(a));
console.log(b.concat(a, ['hi', 'bye']));
/*
      slice(start, end):  
                trả về 1 array mới - là một phần của array ban đầu,
                  bắt đầu từ start đến (end-1) 
                array ban đầu không thay đổi
 */
console.log(a.slice());
console.log(a.slice(1,3));
console.log(a.slice(0,2));

/*****************************  MUTATOR METHODS  ****************************/
/*
      pop():  
                lấy ra phần tử cuối cùng của array và trả về phần tử đó
                array ban đầu thay đổi thành array mới
 */
console.log(a.pop());
console.log('changed, a = ', a);
/*
      push(ele1, ele2, ...):  
                thêm 1 hay nhiều phần tử vào cuối array và trả về length của array mới
                array ban đầu thay đổi thành array mới
 */
console.log(a.push(1, 'lion', 9999));
console.log('changed, a = ', a);
/*
      shift():  
                lấy ra phần tử đầu tiên trong mảng và trả về phần tử đó
                array ban đầu thay đổi thành array mới
 */
console.log(a.shift());
console.log('changed, a = ', a);
/*
      unshift(ele1, ele2, ...):  
                thêm 1 hay nhiều phần tử vào đầu array và trả về length của array mới
                array ban đầu thay đổi thành array mới
 */
console.log(a.unshift(35, 70));
console.log('changed, a = ', a);
/*
      splice(start, deleteCount, ele1, ele2,..):  
                start:
        Cho biết vị trí bắt đầu thay đổi array
        - nếu < 0, vị trí bắt đầu thay đổi là array.length - start
        - nếu trị tuyệt đối lớn hơn array length, thì start = array.length

                deleteCount (optional):
        Cho biết số phần tử sẽ bị xóa bắt đầu từ start (tính cả start)
        - nếu không khai báo hoặc giá trị khai báo >= số phần tử còn lại trong mảng (tính từ start) thì các phần từ tính từ start (bao gồm cả start) sẽ bị xóa
        - nếu <= 0, không xóa gì cả 

                ele1, ele2, ... (optional):
        Cho biết các phần tử mới cần add vào array, tính từ start (phần tử ban đàu tại start bị dời qua phải)

      Return: 1 array chứa các phần tử bị xóa đi (có thể là một empty array)
 */
console.log(a.splice(2,0, 'cat'));            // empty array   
console.log('changed, a = ', a);              // add 'cat' before 'dog'

console.log(a.splice(1, 2, 'ele1', 'ele2'));  // 70, cat
console.log('changed, a = ', a);              // 35, ele1, ele2, dog, 1, lion, 9999

console.log(a.splice(4));                     // 1, lion, 9999
console.log('changed, a = ', a);              // 35, ele1, ele2, dog
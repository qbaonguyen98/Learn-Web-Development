//  hầu hết các methods của Date đều trả về 1 giá trị (tính theo đơn vị time, second, day... tùy theo methods) 
//  tính từ mốc 1-1-1970 UTC

/*  4 trường hợp sử dụng:   1. new Date();
                            2. new Date(value);
                            3. new Date(dateString);
                            4. new Date(year, monthIndex, [day, hours, mins, seconds, ms]) -> ngoặc vuông = optional                         
*/

//  1.
var now = new Date();       // represent current date and time
console.log(now.getTime());         //
console.log(now.getTime());         // both 2 lines print same values, it is the value when now is created

console.log('-------------------------------------------------------------------------');
//  2.
var sometime = new Date(12312312313)    // represent date and time since: (1-1-1970) + input value
console.log(sometime.getTime());
console.log(sometime.getFullYear());
console.log(sometime.getMonth());
console.log(sometime.getDate());
//  => không thực tế, chả ai đi ngồi tính ra cái giá trị ms từ thời điểm 1-1-1970 để truyền vào

console.log('-------------------------------------------------------------------------');
//  3.
var aDate = new Date('August 4, 2019 23:12:00');
console.log(aDate.getTime());
console.log(aDate.getFullYear());
console.log(aDate.getHours());          // 23
console.log(aDate.getDay());            // 0 vì là chủ nhật: chủ nhật - thứ 7 sẽ có giá trị tương ứng là 0-6

console.log('-------------------------------------------------------------------------');
// 4.
var myBirthday = new Date(1998, 7, 10);
console.log(myBirthday.getTime());
console.log(myBirthday.getFullYear());
console.log(myBirthday.getHours());         // 0 (do không truyền tham số giờ vào)    


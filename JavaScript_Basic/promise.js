/*
    Promise: represents the completion or failure of 1 async operation, and its resulting value 

    SYNTAX: var promise = new Promise(executor);

        trong đó:   executor là 1 function có 2 tham số là resolve và reject

    Lưu ý: 
            - executor sẽ được chạy trước khi promise object mới được tạo ra
            - resolve và reject thực chất là function, chúng được gọi bên trong executor

    *** DESCRIPTION *** : xem trên Mozilla, vài ý chính đó là:
            - promise được xem như 1 cái bao chứa return value
            mà chúng ta chưa cần dùng tại thời điểm tạo ra promise (lúc này executor đã return value)
            
        * Có 3 loại methods để dùng trong promise (2 loại đầu có thể chaining):
            .then()
            .catch()
            .finally()
*/
//  EXAMPLE:    in this example, instead of create a new promise, we create a function that return a promise
var fs = require('fs');

function readFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if (err){
                reject(err);        // err này (nếu có) sẽ được truyền vào 1 function - argument của .catch()
            } else{
                resolve(data);       // data này (nếu có) sẽ được truyền vào 1 function - argument của .then() 
            }
        });
    });
}

readFile('./promiseExample.txt')        // right path >>> log data
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

// => tại sao có thể dùng: readFile().then().catch() ???
// Mà không tách riêng ra thành readFile().then() và readFile().catch

// => theo như những gì đã học thì do then() và catch() trả về chính cái promise

readFile('./promiseExample')        // wrong path >>> log err 
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

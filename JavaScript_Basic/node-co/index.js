// *** Hiện tại có thể dùng Async và Await thay cho node-co ***

var fs = require('fs');
var co = require('co');

function readFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if (err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}
// dùng co: (co trả về promise)

// => lợi ích: các lệnh trong này sẽ làm theo thứ tự, như sync, nhưng vẫn là async => chg trình k bị block lúc đọc file

co(function*(){             // function*() >>>>> generator function
    //cách 1
    //var song1 = yield readFile('./song1.txt');      // yield phải theo sau nó là 1 promise, ở đây hàm readFile
    //var song2 = yield readFile('./song2.txt');      // trả về 1 promise
    //var song3 = yield readFile('./song3.txt');
    //return [song1, song2, song3];       // bản thân co luôn trả về 1 promise, ở đây mình sẽ trả về 1 array 
                                          // ở đây các phần tử trong array này đều là promise  
    //cách 2
    var values = yield [
        readFile('./song1.txt'),
        readFile('./song2.txt'),
        readFile('./song3.txt')
    ];
    return values;
}).then(function(values){               
    console.log(values);        // ra cái array trên
}).catch(function(err){
    console.log(err);
})  

// dùng co.wrap():  

var readFile2 = co.wrap(function*(files){
    return yield files.map(function(file){
        return readFile(file);  
    });
    // sai lại code như vậy ?
    /*
        - readFile2() cần phải là promise để sau đó ta có thê gọi then, catch
        - dùng map, tận dụng hàm readFle (hàm này trả về 1 promise)
        - chuyển đổi array đưa vào từ các phần tử là string thành các phần tử là promise
    */
});

readFile2(['./song1.txt', './song2.txt', './song3.txt'])
    .then(function(values){
        console.log(values);
    })
    .catch(function(err){
        console.log(err);
    })

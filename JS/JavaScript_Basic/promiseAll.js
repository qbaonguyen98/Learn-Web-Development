/*
    .all() giúp rút gọn việc sử dụng promise với quá nhiều .then() hay .catch()
*/
var fs = require('fs')

function readFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if(err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}
/***************************************************************************************************** */
// readFile('./song1.txt')                  // đọc file song1
//     .then(function(data){
//         console.log(data)
//         return readFile('./song2.txt');  // trả về 1 hàm (hàm này trả về promise) đọc file song2
//     })
//     .then(function(data){
//         console.log(data)
//         return readFile('./song3.txt');    // tương tụ như trên => đọc 3 file lần lượt
//     })
//     .then(function(data){
//         console.log(data)
//     });

// TUY NHIÊN, VIẾT CODE KIỂU NÀY KHÁ RỐI => dùng promise.all()

Promise.all([
    readFile('./song1.txt'),
    readFile('./song2.txt'),
    readFile('./song3.txt'),
]).then(function(values){           // khi cả 3 thằng đều resolved
    for (var val of values){
        console.log(val);
    }
}).catch(function(err){             // khi 1 trong 3 thằng trên reject hoặc có lỗi gì đó
    console.log(err);
})


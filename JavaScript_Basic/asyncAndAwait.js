// async và await dùng thay thế cho node-co

var fs = require('fs');

function readFiles(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function read2files(){    // thêm từ khóa async vì các operations trong function này là async (promise)
    var song1 = await readFiles('./song1.txt');
    var song2 = await readFiles('./song2.txt');     // await phía trước 1 lệnh async
    return [song1, song2];
}

read2files()
    .then(function(data){
        console.log(data);
    })
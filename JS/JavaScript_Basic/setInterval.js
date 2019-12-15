// setInterval(func, time)      func sẽ làm đi làm lại sau mỗi time (ms)

//  NOTES:                      đếm hết time mới chạy lần đầu tiên, sau đó lặp đi lặp lại

// hàm này trả về 1 id, id này share chung 1 cái id pool với id của setTimeout

// tương tự như setTimeout, ta có thể gọi clearInterval

// var i = 0;
// var id = setInterval(function(){
//     i++;
//     console.log(i);
//     if(i===3){
//         clearInterval(id);
//     }
// }, 2000);

//  example 2:  write a function count from 1 to 10
//              return a promise, so we can call then
function countFrom(a,b){
    var i = 0;
    return new Promise(function(resolve, reject){
        var countId = setInterval(function(){
            i++;
            console.log(i);
            if (i === 10){
                clearInterval(countId);
                resolve();
            }
        }, 1000);
    });
}

countFrom(1,10).then(function(){
    console.log('DONE');
})
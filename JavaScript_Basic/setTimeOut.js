// setTimeOut(function, time)       // time in ms, hết thời gian này thì function mới chạy lần đầu tiên,
//                                                                               cũng là lần cuối cùng :)))

// notes:   - setTimeout trả về 1 cái id, dùng id này để truyền vào clearTimeout
//          - setTimeOut có thể truyền vào nhiều tham số hơn, có thể xem trên Mozilla

// ngoài ra còn có clearTimeOut => nếu chưa hết thời gian mà clear thì cái function bị bỏ qua luôn

var exampleFunc = function(){
    console.log('I\'m a function');
};

console.log('START');
setTimeout(exampleFunc, 2000);
console.log('END');

// result:      START
//              END
//              I'm a function
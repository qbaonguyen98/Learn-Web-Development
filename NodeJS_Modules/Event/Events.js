// 1: BASIC

const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}  // "extends" tạo ra 1 class giống như cái có sẵn, nhưng có thể custom
const myEmitter1 = new MyEmitter();

// gán 1 listener in dòng chữ ... khi có event "print" emitted
myEmitter1.on('print', () => {
    console.log('An event occurred !');
});
// emit event "print" --> dòng chữ được in ra
myEmitter1.emit('print');
myEmitter1.emit('no name');  // nothing happenned

// 2: PASS ARGUMENTS and THIS to LISTENERS  /******************************************************************** */
/*
    - có thể truyền nhiều tham số vào listener
    - this = EventEmitter instance mà mình tạo ra
    
    WARNING: nếu khai báo listener ở dạng ARROW FUNCTIONS, "this" sẽ k có tác dụng
*/
const myEmitter2 = new MyEmitter();
myEmitter2.on('example2', function(a, b) {           // change this to arrow function to see
    console.log(a, b, this, this === myEmitter2);   // "this" is useless
});
myEmitter2.emit('example2');

// 3: ASYNC vs SYNC listeners   /******************************************************************************************************** */
/*
    - Bình thường, các listeners sẽ được thực thi theo thứ tự (sync)
    - Có thể chạy các listeners async bằng cách dùng các methods: setImmediate() hoặc process.nextTick()
*/
const myEmitter3 = new MyEmitter();
myEmitter3.on('example3', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously. Printed at the end');                     // Kết quả sẽ được in ra sau các ví dụ dưới
    });                                                               
});
myEmitter3.on('example3', (a, b) => {
    console.log('this is printed before Even though registerd after ');                     // Kết quả sẽ được in ra sau các ví dụ dưới                                
});
myEmitter3.emit('example3');

// 4: HANDLING EVENTS ONLY ONCE   /****************************************************************************************************** */
/*
    - Mỗi khi event emitted, listener đăng kí với nó sẽ được thực thi
    - Để đăng kí 1 listener chỉ thực thi 1 lần duy nhất (dù sau đó event có emitted), dùng method: .once() thay vì .on()
*/
let m1 = 0;
const myEmitter4a = new MyEmitter();
myEmitter4a.on('example4a', () => {
    console.log(++m1);
});
myEmitter4a.emit('example4a');  // 1
myEmitter4a.emit('example4a');  // 2

/************************* */
let m2 = 0;
const myEmitter4b = new MyEmitter();
myEmitter4b.once('example4b', () => {
    console.log(++m2);
});
myEmitter4b.emit('example4b');  // 1
myEmitter4b.emit('example4b');  // nothing happened 

// 5: ERROR HANDLER   /****************************************************************************************************************** */
/*
    - NodeJS có 1 event là 'error', emitted khi có lỗi, nếu k có listener nào đăng kí với event này, cả chương trình sẽ crash
    - NÊN add 1 listener cho 'error' để thông báo lỗi, và k crash toàn chương trình
*/
const myEmitter5 = new MyEmitter();
myEmitter5.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter5.emit('error', new Error('whoops!')) 
console.log('Program still run !');

// * NOTES *   /****************************************************************************************************************** */
/*
    - Bất kì eventEmitter nào, khi đăng kí 1 listener mới đều sẽ emit 1 event là 'newListener', tương tự khi xoá listener cũng sẽ có 1 
    event 'removeListener' emitted.
        Điểm khác nhau giữa 'newListener' và 'removeListener':
            - 'newListener' emitted TRƯỚC khi listener được đăng kí
            - 'removeListener' emitted SAU khi listener được xoá

    - Có thể sử dụng callback (listener) của 'newListener' để đăng kí listener, tuy nhiên phải dùng .once() cho 'newListener', nếu k
    sẽ loop forever

    - Mặc định, mỗi event chỉ có tối đa 10 listeners >>> có thể set số này lại = method: .setMaxListeners(n) 
        >>> cùng với đó thì cũng có method là: .getMaxListeners()

    - method .emit(eventName , [args]) return: true nếu event truyền vào có listener

    - method .eventNames() return an ARRAY of events, các events là những events có listeners được đăng kí với chúng
    
    - method .listenerCount(eventName): return số listeners đã đăng kí với event đó

    - method .listeners(eventName): return 1 ARRAY (of functions) chứa các listeners được đăng kí với event đó

    - method .on(eventName, listener): thêm listener vào cuối cùng của array chứa các listeners của eventName, 
        return a reference to the Emitter >>> có thể chaining call
        
        (   Để thêm listener vào đầu array: dùng method: .prependListener()  => tương tự như .once(), ta cũng có: .prependOnceListener()
    
    - method .off(eventName, listener): xoá listener 

    - method .removeAllListeners([eventName])

    - Nếu emit 1 event có listener đùng để xoá listener khác, thì việc xoá chỉ có tác dụng khi hàm emit chạy xong (nghĩa là listener cuối cùng 
        của event đó đã thực thi)
    
    - Khi một function được add như 1 listener cho 1 event, .off() sẽ xoá phiên bản listener được add gần nhất

    - 
*/

// Events module: events.once(emitter, name)
/*
    trả về 1 promise: 
        - resolve khi emitter emit 1 event === name >>> resolve 1 array chứa các arguments được truyền vào .emit()
        - reject khi emitter 'error' event
*/
const { once, EventEmitter } = require('events');
async function run() {
    const ee = new EventEmitter();                          // tạo emitter

    process.nextTick(() => {
        ee.emit('myevent', 42);
    });

    const [value] = await once(ee, 'myevent');              // [value] = promise, 'myevent' === event emitted 
    console.log(value);                                     // >>> [value] = [42]

    const err = new Error('kaboom');
    process.nextTick(() => {
        ee.emit('error', err);
    });

    try {
        await once(ee, 'myevent');                          // emitted event là 'error' !== 'myevent' nên chạy block catch {}         
    } catch (err) {
        console.log('error happened', err);
    }
}
run();

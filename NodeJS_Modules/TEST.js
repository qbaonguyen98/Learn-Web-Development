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
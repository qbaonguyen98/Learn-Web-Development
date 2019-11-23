// Tạo 1 TCP Server >>> new net.Server([options], [connectionlistener])
/*
    - TCP server được tạo ra cũng sẽ hoạt động như 1 EventEmitter với các events được thiết lập sẵn bao gồm:

        + 'close'       :   emitted khi server closed. Tuy nhiên, sẽ k emitted trừ khi tất cả connection kết thúc
        + 'connection'  :   emitted khi có connection mới
        + 'error'       :   emitted khi có lỗi
        + 'listening'   :   emitted khi 'server has been bound after calling server.listen()'
*/
const net = require('net');

const server = net.createServer((socket) => {
        socket.end('goodbye\n');
    }).on('error', (err) => {
        // handle errors here
        throw err;
});
    
// grab an arbitrary unused port.
server.listen(() => {
    console.log('opened server on', server.address());          // server.address() chỉ được gọi sau khi đã gọi 'server.listen()'
});

/*  server.close()
        
        - stop server: nghĩa là dừng nhận connection mới, server sẽ đóng khi các connections hiện tại kết thúc
        - có thể truyền 1 hàm callback vào .close() [ với tham số là error để báo lỗi khi server k chạy nhưng lại close ]
*/  
server.close();
console.log('Server closed');

/*** NOTES *********************************************************************************************************************************/
/*
    - server.getConnections(callback): async get number of concurrent connections
        + callback should take 2 arguments: err + count
    
    - server.listen(): bắt đầu chạy server để listen các connections, 
        sau khi đã start listenning, event 'listening' emitted và callback đóng vai trò là listener của event này
        Có 2 syntax:
            + server.listen(handle[, backlog][, callback])
            + server.listen(options[, callback])
        
        Trong đó: 
            + backlog: cho biết độ dài tối đa của queue dành cho các connections - default = 511
*/
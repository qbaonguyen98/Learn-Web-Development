const SerialPort = require('serialport')

const port = new SerialPort('/dev/pts/3', { baudRate: 115200 }, function (err) {      // this create a port and AUTO OPEN it
  if (err) {
    return console.log('Error: ', err.message)
  }
}).setEncoding('hex');

// port.read(3);

// port.on('data', function(data) {
//     //console.log(data);  // 24 bit, hex string

//     var value = parseInt(data, 16);

//     console.log('\n' + (value/34)*0.02 + 'g');      // 34 = 

// });

port.write('adasdasds');

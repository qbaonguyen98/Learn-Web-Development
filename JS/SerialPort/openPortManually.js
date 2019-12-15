const SerialPort = require('serialport')
const port = new SerialPort('/dev/pts/4', { autoOpen: false })     // just create, open later

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on')
})

// The open event is always emitted
port.on('open', function() {                    // this use 'open' event to detect when the port is openned
  // open logic
  console.log('Open port successful!')
})
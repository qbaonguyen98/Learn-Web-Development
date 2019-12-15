/*  
    3 ways to detect WHEN a port is opened

        1. The 'open' event is emitted when the port is opened
        2. The constructors 'openCallback' passed to .open() ___ if the 'autoOpen' is disabled, the callback is inorged
        3. The .open() function takes a callback that is called after the port is opened
*/

const SerialPort = require('serialport')
const port = new SerialPort('/dev/pts/4', function (err) {      // this create a port and AUTO OPEN it
  if (err) {
    return console.log('Error: ', err.message)
  }
})

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})
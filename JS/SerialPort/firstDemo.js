//  to open virtual serial port for testing:
//  $ socat -d -d pty pty

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const path = "/dev/pts/4";
const port = new SerialPort(path, { baudRate: 9600 });

const parser = new Readline();
port.pipe(parser);

parser.on("data", line => console.log(`> ${line}`));
port.write("ROBOT POWER ON\n");

// REMEMBER THAT:
/*
    We can read and write at any time, because the actions will be queued until the port is open
*/

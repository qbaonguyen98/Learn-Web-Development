var express = require('express');
var SerialPort = require('serialport')

var homeController = require('./controllers/home.controller');

var app = express();
var port = 3000;
let readValue;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// ----------------------------------------------------------------------------------
const serialPort = new SerialPort('/dev/ttyUSB0', { baudRate: 115200, autoOpen: false }).setEncoding('hex');

serialPort.open(function(err) {
    if (err) {
        return console.log('Error opening port: ', err.message)
    }
});

setInterval(function(){
    serialPort.write('5', function(err){
        console.log(err);
    });
}, 500);

serialPort.read(3);
serialPort.on('data', function(data) {
    console.log(data);
    readValue = parseInt(data, 16);
});

// ----------------------------------------------------------------------------------

app.get('/', homeController.index);

app.get('/update', function(req, res){
    //console.log('read value: ' + readValue);
    res.json({value: readValue});
});

app.get('/range', function(req, res){
    //console.log(req.query.range);
    var range = parseInt(req.query.range);
    if (range === 20) {
        serialPort.write('6', function(err){
            console.log(err);
        });
    } else {
        serialPort.write('7', function(err){
            console.log(err);
        });
    }
    res.redirect('/');
});

app.get('/calib', function(req, res){
    serialPort.write('8', function(err){
        console.log(err);
    });
    res.json({status: 'OK'});
});

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

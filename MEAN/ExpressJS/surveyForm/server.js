//load express module
var express = require('express');
//invoke var express and store resulting application in var app
var app = express();
//require body-parser to retrieve post data
var bodyParser = require('body-parser');
//use body-parser
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){

    res.render('index')
});

app.post('/result', function(req, res){
    var result = req.body;

    res.render('result', {result: result})
});

var server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log('We are using sockets');
    console.log(socket.id);
    socket.on('form_submitted', function(data) {
        socket.emit('server_response', {res: data});
        socket.emit('random_number', {ran_num: Math.floor((Math.random() * 1000) + 1)});
    });
});

app.use(express.static('./static'));

app.set('views', './views');

app.set('view engine', 'ejs');


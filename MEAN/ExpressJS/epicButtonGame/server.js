//load express mod
var express = require('express');
//invoke var express and store resulting app in var app
var app = express();
//require body-parser to retrieve post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

//set server var
var server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    var count = 0;
    console.log(socket.id);
    socket.on('count_inc', function(){
        count++;
        socket.emit('count_increment', {res: count});
    });
    socket.on('count_reset', function(){
        count = 0;
        socket.emit('reset_count', {res: count});
    });
})

app.get('/', function(req, res) {

    res.render('index');
});



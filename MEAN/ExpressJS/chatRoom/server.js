var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

//set server var
var server = app.listen(8000, function(){
    console.log('listening on port 8000');
});

var io = require('socket.io').listen(server);

var users = [];
io.sockets.on('connection', function(socket){
    console.log(socket.id);
    socket.on('send_user_name', function(data){
        users.push({id:socket.id, name:data.name});
        var names_arr = users.map(function(x){
            return x.name;
        });
        socket.emit('send_user_name', {current_user:users[users.length-1], all_users: names_arr});
        console.log(names_arr);
    });

    socket.on('send_message', function(data){
        var sender = users.find(function(x){
            return x.id == data.sender;
        });
        data.sender = sender.name;
        console.log(data);
        io.emit('send_message', data);
    });

    socket.on('disconnect', function(){
        var index = users.find(function(x){
            return x.id == socket.id;
        });
        // io.emit('user_left', {name:users[index].name});
        users.splice(index, 1);
    });
});

app.get('/', function(req, res) {
    

    res.render('index');
});
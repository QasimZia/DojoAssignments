//load the express module
var express = require('express');
//invoke var express and store the resulting application in var app
var app = express();
//require bodyparser to retrieve post data
var bodyParser = require('body-parser');
//require express-session to use session
var session = require('express-session');
//string for encryption of session
app.use(session({secret: 'codingdojorocks'}));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
    response.send('<h1>Hello Express</h1>');
});

app.listen(8000, function() {
    console.log('listening on port 8000');
});
//tells express app to use static folder
app.use(express.static(__dirname + '/static'));
//set location where views are located
app.set('views', __dirname + '/views');
//set which templating engine to use
app.set('view engine', 'ejs');

app.get('/users', function(request, response) {
    var users_array = [
        {name: 'Michael', email: 'michael@codingdojo.com'},
        {name: 'Jay', email: 'jay@codingdojo.com'},
        {name: 'Brendan', email: 'brendan@codingdojo.com'},
        {name: 'Andrew', email: 'andrew@codingdojo.com'}
    ];
    response.render('users', {users: users_array});
});


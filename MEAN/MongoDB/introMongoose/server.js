var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});

//connect express to database server using mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {type: String},
    age: {type: Number},
}, {timestamps: true});
//set schema in models as 'User'
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
//routes
//root
app.get('/', function(req, res){
    User.find({}, function(err, users) {

        res.render('index', {users: users});
    })

//    res.render('index'); 
});

//add user
app.post('/users', function(req, res){
    console.log('Post data', req.body);
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});
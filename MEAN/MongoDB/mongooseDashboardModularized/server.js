var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/static'));
app.set('views', './client/views');
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
    console.log('Listening on port 8000');
})

//models
require('./server/config/mongoose.js');

//routes
var routesSetter = require('./server/config/routes.js');

routesSetter(app);
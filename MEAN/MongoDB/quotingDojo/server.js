var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

var server = app.listen(8000, function(){
    console.log('Listening on port 8000');
})

//db setup
mongoose.connect('mongodb://localhost/quoting_dojo');
var Schema = mongoose.Schema;
//schemas/models
var QuoteSchema = new Schema({
    name: {type: String, required: true},
    content: {type: String, required: true},
}, {timestamps:true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

//routes
app.get('/', function(req, res){

    res.render('index');
})

app.get('/quotes', function(req, res){
    var quotes = Quote.find({}, function(err, quotes){

        console.log(quotes[0]);
        res.render('quotes', {quotes: quotes});
    })

})

app.post('/quotes', function(req, res){
    var quote = new Quote(req.body);

    quote.save(function(err){
        if(err){
            console.log(err.messages);
            res.render('index', {errors: quote.errors});
        } else {
            res.redirect('/quotes');
        }
    })

})
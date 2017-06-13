var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./static'));
app.set('views', './views');
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
    console.log('Listening on port 8000');
})

mongoose.connect('mongodb://localhost/mongoose_dashboard');
var Schema = mongoose.Schema;

var OwlSchema = new Schema({
    name: {type: String, required: true, minLength: 3},
    color: {type: String, required: true},
    age: {type: Number, required: true, min: 1, max: 150},
    description: {type: String, required: true},
})

mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');

//routes
app.get('/', function(req, res){
    var owls = Owl.find({}, function(err, owls){


        res.render('index', {owls: owls});
    })
})

app.get('/owls/new', function(req, res){


    res.render('addOwl');
})

app.post('/owls', function(req, res){
    var owl = new Owl(req.body);

    owl.save(function(err){
        if(err){
            res.render('addOwl', {errors: owl.errors});
        } else {
            res.redirect('/');
        }
    })

})

app.get('/owls/:id', function(req, res){
    Owl.findOne({_id: req.params.id}, function(err, owl) {
        if(err){
            console.log(err)
            res.redirect('index');
        } else {

            res.render('showOwl', {owl: owl});
        }

    })

})

app.get('/owls/edit/:id', function(req, res){
    Owl.find({_id: req.params.id}, function(err, owl) {
        if(err){
            console.log(err);
            res.redirect('/');

        } else {

            res.render('editOwl', {owl: owl[0]});
        }
    });
})

app.post('/owls/:id', function(req, res){
    // Owl.findOne({_id: req.params.id}, function(err, owl){
    //     owl.name = req.body.name;
    //     owl.color = req.body.color;
    //     owl.age = req.body.age;
    //     owl.description = req.body.description;

    //     owl.save(function(err){
    //         if(err) {
    //             res.render('/owls/edit/' + owl._id, {errors: owl.errors});
    //         } else {

    //             res.redirect('/');
    //         }
    //     })
    // })

    Owl.update({_id: req.params.id}, req.body, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

app.get('/owls/destroy/:id', function(req, res){
    Owl.remove({_id: req.params.id}, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

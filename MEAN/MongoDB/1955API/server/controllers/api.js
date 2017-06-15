var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
    index: function(req, res){
        var people = Person.find({}, function(err, people){

            res.json(people);
        })
    },
    create: function(req, res){
        var person = new Person(req.params);

        person.save(function(err){
            if(err){
                res.json('Error');
            } else {
                res.redirect('/')
            }
        })
    },
    show: function(req, res){
        Person.findOne({name: req.params.name}, function(err, person) {

            res.json(person);
        })
    },
    destroy: function(req, res){
        Person.remove({name: req.params.name}, function(err){
            if(err){
                res.json(err);
            } else {
                res.redirect('/');
            }
        })
    },

}

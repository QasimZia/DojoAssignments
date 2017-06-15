var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');
module.exports = {
    index: function(req, res) {
        var owls = Owl.find({}, function(err, owls){


            res.render('index', {owls: owls});
        });
    },
    show: function(req, res){
        Owl.findOne({_id: req.params.id}, function(err, owl) {
            if(err){
                console.log(err)
                res.redirect('index');
            } else {

                res.render('showOwl', {owl: owl});
            }
        })      
    },
    create: function(req, res) {
        var owl = new Owl(req.body);

        owl.save(function(err){
            if(err){
                res.render('addOwl', {errors: owl.errors});
            } else {
                res.redirect('/');
            }
        })      
    },
    edit: function(req, res){
        Owl.find({_id: req.params.id}, function(err, owl) {
            if(err){
                console.log(err);
                res.redirect('/');

            } else {

                res.render('editOwl', {owl: owl[0]});
            }
        })     
    },
    update: function(req, res){
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
    },
    destroy: function(req, res){
        Owl.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        })        
    }
}
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: {type: String},
})

var Person = mongoose.model('Person', PersonSchema);
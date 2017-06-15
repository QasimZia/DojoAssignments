var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwlSchema = new Schema({
    name: {type: String, required: true, minLength: 3},
    color: {type: String, required: true},
    age: {type: Number, required: true, min: 1, max: 150},
    description: {type: String, required: true},
})

var Owl = mongoose.model('Owl', OwlSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
    name: {type: String},
    quote: {type: String},
});
//register schema as model
var Quote = mongoose.model('Quote', QuoteSchema);
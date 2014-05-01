var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

/**
 * House Info Schema
 */
var HouseSchema = new Schema({
    state: String,


});

var house = mongoose.model('House', HouseSchema);


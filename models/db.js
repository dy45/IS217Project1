var mongoose = require('mongoose');

var houseschema = new mongoose.Schema({
        country: String,
        state: String
    });
mongoose.model( 'house', houseschema );



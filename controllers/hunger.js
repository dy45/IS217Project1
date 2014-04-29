var mongoose = require('mongoose')
    , hunger = mongoose.model('hunger');

exports.list = function(req, res) {
    hunger.find({}, function(err, hunger) {
        res.render('hunger', {
            title: 'Hunger Stats',
            hunger: hunger
        });
    });
}
exports.jsonlist = function(req, res) {

    hunger.find({}, function(err, hunger) {
        res.send(hunger);
    });
}
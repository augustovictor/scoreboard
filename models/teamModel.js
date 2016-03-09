var mongoose = require('mongoose');

var TeamSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Team', TeamSchema);

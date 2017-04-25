var mongoose = require('mongoose');

var gardenSchema = new mongoose.Schema({
    name: {
        type: String
    },
    vegetables: String,
    url: String,
    readyOn: {
            type: Date,
            default: Date.now
        },
    zipCode: Number

});

var Garden = mongoose.model('Garden', gardenSchema)

module.exports = Garden;

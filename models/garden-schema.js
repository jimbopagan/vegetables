var mongoose = require('mongoose');

var gardenSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: String,
    vegetables: String,
    comments: [String],
    //long, lat
    location: {
        city: String
    }

});

var Garden = mongoose.model('Garden', gardenSchema)

module.exports = Garden;
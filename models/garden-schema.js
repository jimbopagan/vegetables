var mongoose = require('mongoose');

var gardenSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: String,
    vegetables: [{
        name: {
            type: String,
            required: true
        },
        description: String,
        photos: [String],
        readyOn: {
            type: Date,
            default: Date.now,
            required: true
        }
}],
    location: {
        address: String,
        city: String,
        state: String,
        zipCode: Number
    }

});

var Garden = mongoose.model('Garden', gardenSchema)

module.exports = Garden;

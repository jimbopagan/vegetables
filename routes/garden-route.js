var express = require('express');
var router = express.Router();


//models
var Garden = require('../models/garden-schema');

router
    .route('/')
    .get(function (req, res) {
        console.log(req.query);
        Garden.find({'location.city': req.query.location}, function (err, gardens) {
            if (err) {
                res.send(err);
            }
            console.log(gardens);
            res.send(gardens);
        })
    })
    .post(function (req, res) {
        var garden = new Garden(req.body);
        garden.save(function (err, createdGardenObject) {
            if (err) {
                res.send(err);
            }
            
            res.send(createdGardenObject);
        });
    })




module.exports = router;

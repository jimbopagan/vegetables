var express = require('express');
var router = express.Router();


//models
var Garden = require('../models/garden-schema');


router
    .route('/')
    .get(function (req, res) {
        Garden.find({}, function (err, gardens) {
            if (err){
                res.send(err);
            }
            console.log(gardens);
            res.send(gardens);
            
        })


    })



module.exports = router;
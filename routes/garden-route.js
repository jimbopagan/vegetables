var express = require('express');
var router = express.Router();


//models
var Garden = require('../models/garden-schema');

router
    .route('/')
    .get(function (req, res) {
        console.log(req.query);
        Garden.find(req.query, function (err, gardens) {
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
router
    .route('/:id')
    .put(function (req, res) {
    console.log(req.params.id);
    console.log(req.body);
        Garden.findById(req.params.id, function (err, garden) {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(garden)
                garden.name = req.body.name || garden.name;
                garden.name = req.body.name || garden.name;
                garden.url = req.body.url || garden.url;
                garden.readyOn = req.body.readyOn || garden.readyOn;
                garden.zipCode = req.body.zipCode || garden.zipCode;
                garden.save(function (err, garden) {
                    if (err) {
                        res.status(500).send(err)
                    }

                })
                res.send(garden);
            }


        })


    })
    .delete(function (req, res) {
        Garden.findByIdAndRemove(req.params.id, function (err, garden) {
            var response = {
                message: "garden deleted",
//                id: garden._id
            }
            res.send(response);
        })
    })





//'zipCode': req.query.zipCode

module.exports = router;


var express = require('express');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var app = express();
var garden = require('./routes/garden-route.js');



mongoose.connect('mongodb://localhost/gardens', function(){
    console.log('mongoose is loose');
});


app.use(bodyParser.json());

app.use('/gardens', garden);

app.use(express.static('public'));


app.listen(3000, function(){
    console.log('port 3000');
})
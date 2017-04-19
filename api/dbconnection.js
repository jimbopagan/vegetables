var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongoddb://localhost:27017/gardens';

var _connection = null;
var open = fucntion(){
    //set connections
    MongodClient.connect(dburl, function(err, db){
        if(err){
           console.log('DB connection failure') 
        }
        _connection = db;
        console.log('DB connected', db)
    })
}

var get = function(){
    return _connection;
}

module.exports = {
    open:open,
    get:get
}
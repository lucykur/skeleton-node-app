var user= require('../models/user');

exports.hello = function(req, res, next){
    res.send("Hello World");
}

exports.getUser = function(req, res, next){
    res.send(user.get());
}

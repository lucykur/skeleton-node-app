var req = require(process.cwd() + '/require-from-app-root').req;
var user= req('app/models/user');

exports.hello = function(req, res, next){
    res.send("Hello World");
}

exports.getUser = function(req, res, next){
    res.send(user.get());
}

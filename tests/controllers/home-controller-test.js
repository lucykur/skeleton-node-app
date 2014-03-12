var assert = require('assert');
var req = require(process.cwd() + '/require-from-app-root').req;
var homeController = req('app/controllers/home-controller');

describe('home controller test', function() {
    it('should get user', function() {
        var resData = {};
        res = {send: function(data){ resData = data; }}
        console.log(homeController);
        homeController.getUser({}, res);

        assert.equal("Test User", resData.name);
        assert.equal("test@user.com", resData.email);
    });
});

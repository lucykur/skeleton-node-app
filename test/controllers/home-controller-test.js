var homeController = require('../../app/controllers/home-controller');
var assert = require('assert');

describe('home controller test', function() {
    it('should get user', function() {
        var resData = {};
        res = {send: function(data){ resData = data; }}
        homeController.getUser({}, res);

        assert.equal("Test User", resData.name);
        assert.equal("test@user.com", resData.email);
    });
});

var mocha = require('mocha')
  , chai = require('chai');

require('mocha-as-promised')([mocha]);
chai.should();
chai.use(require('chai-as-promised'));

var request = require('request');
var Q = require('q');

describe('Home Controller Tests', function() {
    it('should get user', function(){
      var userPromise = Q.ninvoke(request, 'get', {url: 'http://localhost:3000/user'}).get(1).then(JSON.parse);
     
      return Q.all([
         userPromise.should.eventually.have.property('email').to.eql('test@user.com'),
         userPromise.should.eventually.have.property('name').to.eql('Test User')
     ]);
    });
});

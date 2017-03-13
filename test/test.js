var chai = require('chai')
  , chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Get list of events', () => {
  it('It should return all events', (done) => {
    chai.request('http://localhost:3000')
      .get('/events')
      .end(function(err, res) {
        res.body.should.be.a('array');
        done();   // <= Call done to signal callback end
      });
  });
});

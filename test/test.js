let assert   = require('assert');
let chai     = require('chai');
let chaiHttp = require('chai-http');
let should   = chai.should();

chai.use(chaiHttp);

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});



describe('Test Events Api', () => {
	/*
	* Test the /GET route
	*/
	describe('/GET events', () => {
		it('It should GET all the events', (done) => {
			chai.request('http://localhost:3000')
			.get('/events')
			.end((err, res) => {
				res.should.have.status(200);
				res.error.should.be.false;
				res.body.should.be.an('array');
				done();
			});
		});
	});

	/*
	* Test the /GET route
	*/
	describe('/GET event by :Id', () => {
		it('It should GET an event by Id', (done) => {
			chai.request('http://localhost:3000')
			.get('/events/1')
			.end((err, res) => {
				res.should.have.status(200);
				res.error.should.be.false;
				res.body.should.be.an('object');
				res.body.should.have.property('id').equal(1);
				done();
			});
		});
	});

	/*
	* Test the /POST route
	*/
	describe('/POST event', () => {
		it('It should POST an event', (done) => {
			let event = {
				'title': 'a',
				'description': 'a',
				'date': '01-02-2017'
			};

			chai.request('http://localhost:3000')
			.post('/events')
			.send(event)
			.end((err, res) => {
				res.should.have.status(200);
				res.error.should.be.false;
				res.body.should.be.an('object');
				res.body.should.have.property('title').equal('a');
				done();
			});
		});
	});


  /*
  * Test the /PUT route
  */
  describe('/PUT event', () => {
    it('It should UPDATE an event', (done) => {
      let event = {
        'title': 'a',
        'description': 'a',
        'date': '01-02-2017'
      };

      chai.request('http://localhost:3000')
      .put('/events/1')
      .send(event)
      .end((err, res) => {
        res.should.have.status(200);
        res.error.should.be.false;
        res.body.should.be.an('object');
        res.body.should.have.property('title').equal('a');
        done();
      });
    });
  });

});


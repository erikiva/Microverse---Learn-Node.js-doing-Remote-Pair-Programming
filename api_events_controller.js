var insertEvents = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('events');
  // Insert some documents
  collection.insertMany([
    {
			'id': 1,
			'title': 'title 1',
			'description': 'description1',
			'date': '01-02-2017'
		},
		{
			'id': 2,
			'title': 'title 2',
			'description': 'description2',
			'date': '02-02-2017'
		},
		{
			'id': 3,
			'title': 'title 3',
			'description': 'description3',
			'date': '01-02-2017'
		}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/api';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
 //  assert.equal(null, err);
 //  console.log("Connected successfully to server");
	// insertEvents(db, function() {
 //    db.close();

	return db;

   });

});

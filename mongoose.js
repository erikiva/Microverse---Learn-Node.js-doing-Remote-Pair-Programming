const mongoose = require('mongoose');
const url      = 'mongodb://localhost:27017/api';


module.exports = function () {
	mongoose.connect(url);

	let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	/*db.once('open', function(){
		// we`re connected;
	});*/
	return db;
}
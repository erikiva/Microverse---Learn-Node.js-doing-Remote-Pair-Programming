const mongoose = require('mongoose');

let eventSchema = mongoose.Schema({
	'id': Number,
	'title': String,
	'description': String,
	'date': {
		type: Date,
		default: Date.now
	}
});

let Event = mongoose.model('Event', eventSchema);

module.exports = Event;
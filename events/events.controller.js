const Event = require('./events.model');

let getAll = (req, res) => {
	Event.find(function (err, events) {
  		if (err) return console.error(err);
  		res.status(200).json(events);
	});
}

let getById = (req, res) => {
	let id = req.params.id;

	Event.findOne({id: id}, function (err, event) {
  		if (err) return console.error(err);
  		res.status(200).json(event);
	});
}

let create = (req, res) => {
	let event = new Event({'id': req.body.id,
		'title': req.body.title,
		'description': req.body.description});

	event.save(function(err, event){
		res.status(200).json(event);
	});
}

let updateById = (req, res) => {
	let conditions = { id : parseInt(req.params.id) };
	let update     = { 
			title : req.body.title, 
			description: req.body.description 
		};
	let options    = { new: true };

	Event.findOneAndUpdate( conditions, update, options, function(error, event){
			res.status(200).json(event);
		} 
	);
}

let deleteById = (req, res) => {
	let conditions = { id : parseInt(req.params.id) };
	
	Event.deleteOne(conditions, function(error, event){
		res.status(200).json(event);
	});
}

let controller = {
	getAll,
	getById,
	create,
	updateById,
	deleteById
};

module.exports = controller;





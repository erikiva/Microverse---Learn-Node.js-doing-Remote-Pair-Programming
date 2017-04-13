const User = require('./users.model');

let getAll = (req, res) => {
	User.find(function (err, users) {
  		if (err) return console.error(err);
  		res.status(200).json(users);
	});
}

let getById = (req, res) => {
	let id = req.params.id;

	User.findOne({id: id}, function (err, user) {
  		if (err) return console.error(err);
  		res.status(200).json(user);
	});
}

let create = (req, res) => {
	let user = {
		'username': req.body.username,
		'email': req.body.email,
		'password': req.body.password,
		'fullname': req.body.fullname};

	User.create(user, function(err, user){
		if(err) res.status(503).json(err);
		res.status(200).json(user);
	});
}

let updateById = (req, res) => {
	let conditions = { _id : req.params.id };
	let update     = {
			fullname : req.body.fullname
		};
	let options    = { new: true };

	User.findOneAndUpdate( conditions, update, options, function(error, user){
			res.status(200).json(user);
		}
	);
}

let deleteById = (req, res) => {
	let conditions = { _id : req.params.id };

	User.deleteOne(conditions, function(error, user){
		res.status(200).json(user);
	});
}

let search = (req, res) => {
	User.find({username: new RegExp(req.params.term)}, function (err, users) {
  		if (err) return console.error(err);
  		res.status(200).json(users);
	});
}

let controller = {
	getAll,
	getById,
	create,
	updateById,
	deleteById,
	search
};

module.exports = controller;





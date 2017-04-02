const express = require('express');
const router = express.Router();
const Event = require('./events.model');

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/', (req, res) => {
	Event.find(function (err, events) {
  		if (err) return console.error(err);
  		res.status(200).json(events);
	});
})

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/:id', (req, res) => {
	let id = req.params.id;

	Event.findOne({id: id}, function (err, event) {
  		if (err) return console.error(err);
  		res.status(200).json(event);
	});
})

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.post('/', (req, res) => {
	let event = new Event({'id': req.body.id,
		'title': req.body.title,
		'description': req.body.description});

	event.save(function(err, event){
		res.status(200).json(event);
	});
})

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.put('/:id', (req, res) => {
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
})

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.delete('/:id', (req, res) => {
	let conditions = { id : parseInt(req.params.id) };
	
	Event.deleteOne(conditions, function(error, event){
		res.status(200).json(event);
	});
})

module.exports = router;
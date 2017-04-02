const express = require('express');
const router = express.Router();
//let events = require('./data')
const db = require('./db');

router.get('/', (req, res) => {
	const events = db.get().collection('events');
	events.find().toArray(function(err, docs) {
		res.status(200).json(docs)
  })
})

router.get('/:id', (req, res) => {
	const events = db.get().collection('events');
	events.find({id: parseInt(req.params.id)}).toArray(function(err, docs) {
		res.status(200).json(docs)
  })
})

router.post('/', (req, res) => {
	let event = {'id': req.body.id,
		'title': req.body.title,
		'description': req.body.description,
		'date': req.body.date};
	const events = db.get().collection('events');
	const returned = events.insertOne(event, function(error, data){
		console.log(error, data);
		res.status(200).json(data.ops)
	});

})

router.put('/:id', (req, res) => {
	const events = db.get().collection('events');
	const returned = events.findOneAndUpdate({ id : parseInt(req.params.id) },
		{ $set: { title : req.body.title, description: req.body.description } },
		{ returnNewDocument: true },
		function(error, data){
			console.log(error, data);
			res.status(200).json(data.value);
		});
})

router.delete('/:id', (req, res) => {

	const events = db.get().collection('events');
	const returned = events.findOneAndDelete({ id : parseInt(req.params.id) },
		function(error, data){
			if (data.value) {
				res.status(200).json(data.value);
			}
			console.log(error, data);
			res.status(404).json({status:'error'});
		});



})

module.exports = router;


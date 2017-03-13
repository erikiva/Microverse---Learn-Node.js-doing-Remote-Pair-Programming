const express = require('express');
const router = express.Router();
let events = require('./data')

router.get('/', (req, res) => {
	res.status(200);
	res.json(events);
})

router.get('/:id', (req, res) => {
	res.status(200);
	let event = events.find(event => event.id === parseInt(req.params.id));
	res.json(event);
})

router.post('/', (req, res) => {
	res.status(200);
	let event = {'id': req.body.id,
		'title': req.body.title,
		'description': req.body.description,
		'date': req.body.date};
	events.push(event);
	res.json(event);
})

router.put('/:id', (req, res) => {
	res.status(200);
	let id = parseInt(req.params.id);
	let event = events.find(event => event.id === id);
	event.title = req.body.title;
	event.description = req.body.description;
	res.json(event);
})

router.delete('/:id', (req, res) => {
	let id = parseInt(req.params.id);
	let event = events.find(event => event.id === id);

	if (event) {
		events = events.filter(event => event.id !== id);
		console.log(id, events);
		res.status(200);
		res.json(event);
	} else {
		res.status(404);
		res.send('event not found');
	}
})

module.exports = router;


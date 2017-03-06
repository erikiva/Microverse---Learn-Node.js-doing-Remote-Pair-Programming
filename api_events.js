const express = require('express');
const router = express.Router();
const events = require('./data')

router.get('/', (req, res) => {
	res.status(200);
	res.json(events);
})

router.get('/:id', (req, res) => {
	res.status(200);
	let event = events.filter(event => event.id == req.params.id);
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


router.post('/', (req, res) => {
	res.send('routes post');
})

router.put('/', (req, res) => {
	res.send('routes put');
})

module.exports = router;

//export default router;

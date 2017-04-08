const express   = require('express');
const router    = express.Router();
const eventCtrl = require('./events.controller');

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/', eventCtrl.getAll);


/**
 * Search by title
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/search/:term', eventCtrl.search);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/:id', eventCtrl.getById);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.post('/', eventCtrl.create);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.put('/:id', eventCtrl.updateById);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.delete('/:id', eventCtrl.deleteById);


module.exports = router;

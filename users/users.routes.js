const express   = require('express');
const router    = express.Router();
const ctrl = require('./users.controller');


/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/', ctrl.getAll);


/**
 * Search by title
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/search/:term', ctrl.search);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/:id', ctrl.getById);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.post('/', ctrl.create);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.put('/:id', ctrl.updateById);

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.delete('/:id', ctrl.deleteById);


module.exports = router;

const express       = require('express');
const router        = express.Router();
const passport      = require('passport');
const ctrl          = require('./events.controller');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../users/users.model');

passport.use(new BasicStrategy(
	function(username, password, done) {

		console.log(username, password, done);

		User.findOne({ username: username }, function (err, user) {
			console.log(user);
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (!user.validPassword(password)) { return done(null, false); }
			return done(null, user);
		});
	}
));

/**
 * [description]
 * @param  {[type]} err     [description]
 * @param  {[type]} events) {             		if (err) return console.error(err);  		res.status(200).json(events);	});} [description]
 * @return {[type]}         [description]
 */
router.get('/', passport.authenticate('basic', { session: false }), ctrl.getAll);

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

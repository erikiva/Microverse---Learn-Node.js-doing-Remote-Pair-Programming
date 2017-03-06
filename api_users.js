const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.send('routes get');
})

router.post('/', (req, res) => {
	res.send('routes post');
})

router.put('/', (req, res) => {
	res.send('routes put');
})

module.exports = router;

//export default router;
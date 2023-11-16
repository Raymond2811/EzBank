const router = require('express').Router();
const bankAccountRoutes = require('./bankAccountRoutes');
const overview = require('./overview');

router.use('/',bankAccountRoutes);
router.use('/accountoverview',overview);

module.exports = router;
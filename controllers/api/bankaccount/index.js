const router = require('express').Router();
const bankaccountRoutes = require('./bankaccountRoutes');
const overview = require('./overview');

router.use('/',bankaccountRoutes);
router.use('/accountoverview',overview);

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bankaccount = require('./bankaccount');

router.use('/users', userRoutes);
router.use('/bankaccount', bankaccount);

module.exports = router;

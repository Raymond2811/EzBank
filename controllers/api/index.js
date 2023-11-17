const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bankAccountRoutes = require('./bankAccountRoutes');
const overviewRoutes = require('./overviewRoutes');

router.use('/users', userRoutes);
router.use('/bankaccount', bankAccountRoutes);
router.use('/overview', overviewRoutes);

module.exports = router;

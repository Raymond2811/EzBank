const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bankAccount = require('./bankAccount');

router.use('/users', userRoutes);
router.use('/bankaccount', bankAccount);

module.exports = router;

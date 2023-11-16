const router = require('express').Router();
const overviewRoutes = require('./overviewRoutes');

router.use('/',overviewRoutes);

module.exports = router;
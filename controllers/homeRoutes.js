const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.redirect('/homepage');
});

router.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/homepage.html'));
});
  
router.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/signup', (req, res) => {
    res.render('enroll');
});

module.exports = router;
const router = require('express').Router();
const path = require('path');
const {User, Checkings} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.redirect('/homepage');
});

router.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/homepage.html'));
});
  
router.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/about.html'));
});

router.get('/signup', (req, res) => {
    res.render('enroll');
});

router.get('/bankaccount', withAuth, async (req, res) => {
    try {
      const CheckingData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Checkings }],
      });
      
      if (!CheckingData) {
        res.status(404).json({ message: 'No Checking found with this id!' });
        return;
      }
      const checkingData = CheckingData.get({plain:true});
      console.log(checkingData);
      res.render('checking',checkingData);
    } catch (error) {
      console.log(error);  
      res.status(500).json(error);
    }
  });

  router.get('/checking/:id', withAuth, async (req, res) => {
    try {
      const CheckingData = await Checkings.findByPk(req.session.user_id, {
        // include: [{ model: Checkings }],
        attributes: { exclude: ['password'] },
      });
      
      if (!CheckingData) {
        res.status(404).json({ message: 'No Checking found with this id!' });
        return;
      }
      const checkingData = CheckingData.get({plain:true});
      console.log(checkingData);
      res.render('AccOverview', {
        ...CheckingData,
        logged_in: true
      });
    } catch (error) {
      console.log(error);  
      res.status(500).json(error);
    }
  });
  
module.exports = router;
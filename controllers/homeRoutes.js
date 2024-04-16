const router = require('express').Router();
const {User, Checkings, AccOverview} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.redirect('/homepage');
});

router.get('/homepage', (req, res) => {
  res.render('homepage');
});
  
router.get('/aboutus', (req, res) => {
  res.render('aboutus',{about: true});
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
    res.render('checking',checkingData);
  } catch (error) {
    console.log(error);  
    res.status(500).json(error);
  }
});

router.post('/bankaccount', withAuth, async(req,res) => {
  try {
   const newCheckingAccount = await Checkings.create({
    ...req.body,
    user_id: req.session.user_id,
   })
   res.status(200).json(newCheckingAccount);
  } catch (error) {
   console.log(error);
  }
});

router.delete('/bankaccount/:id', withAuth, async(req,res) =>{
  try{
    const checkingAccount = await Checkings.destroy({
      where:{
        id:req.params.id,
        user_id: req.session.user_id,
      },
    });

    if(!checkingAccount) {
      res.status(404).json({message: 'No checking account found with this id!'})
      return;
    }
    res.status(200).json(checkingAccount);
  } catch(error){
    res.status(500).json(error);
  }
});

router.get('/checking/:id', withAuth, async (req, res) => {
  try {
    const CheckingData = await Checkings.findByPk(req.session.user_id, {
      include: [{ model: AccOverview }],
    });
      
    if (!CheckingData) {
      res.status(404).json({ message: 'No Checking found with this id!' });
      return;
    };
    const checkingData = CheckingData.get({plain:true});

    if (!checkingData.AccOverview) {
      checkingData.AccOverview = {
        name: 'EzBank Checking Account',
        balance: 0,
        transactions: '',
      };
    } else if (checkingData.AccOverview.transactions) {
      checkingData.AccOverview.transactions = checkingData.AccOverview.transactions.split(',');
    }
    res.render('AccOverview', {
      ...checkingData.AccOverview,
      logged_in: true,
    });
  } catch (error) {
    console.log(error);  
    res.status(500).json(error);
  }
});
  
module.exports = router;
const router = require('express').Router();
const { Checkings, User } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const CheckingData = await User.findAll ({
      include:[{ model: Checkings}],
    });
    res.json(CheckingData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const CheckingData = await User.findByPk(req.params.id, {
      include: [{ model: Checkings }],
    });

    if (!CheckingData) {
      res.status(404).json({ message: 'No Checking found with this id!' });
      return;
    }

    res.status(200).json(CheckingData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const CheckingData = await Checkings.create(req.body);
    res.status(200).json(CheckingData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const CheckingData = await Checkings.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckingData) {
      res.status(404).json({ message: 'No Checking found with this id!' });
      return;
    }

    res.status(200).json(CheckingData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newCheckings = await Checkings.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newCheckings);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const checkingsData = await Checkings.findAll(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const checks = checkingsData.get({ plain: true });

//     res.render('Checkings', {
//       ...checks,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const checkingsData = await Checkings.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!checkingsData) {
//       res.status(404).json({ message: 'No checking found with this id!' });
//       return;
//     }

//     res.status(200).json(checkingsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

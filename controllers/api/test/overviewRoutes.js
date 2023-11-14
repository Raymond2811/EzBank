const router = require('express').Router();
const { AccOverview, Checkings } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const overviewData = await AccOverview.findOne({
            where: {
                Checkings_id: req.params.id,
            },
            include: [
                {
                    model: Checkings,
                    attributes: ['id', 'name', 'balance', 'transactions'],
                },
            ],
        });

        if (!overviewData) {
            return res.render('error', { message: 'No overview found with this id!' });
        }

        const overview = overviewData.get({ plain: true });

        res.render('overview', {
            ...overview,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/', homeRoute);


router.get('/', (req, res) => {
    res.render('lyceum');
  
});

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;

const { Router } = require('express');
const router = new Router();
const imageServiceRouter = require('./imageServiceRouter.js');

router.use('/image-service', imageServiceRouter);

module.exports = router;
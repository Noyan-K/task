const { Router } = require('express');
const express = require('express');
const urlencodedParser = express.urlencoded({ extended: false });
const router = new Router();
const imageConverter = require('../controllers/imageConverterController.js');

router.post("/webp", urlencodedParser, imageConverter.webp);

module.exports = router;
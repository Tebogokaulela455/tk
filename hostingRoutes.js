
const express = require('express');
const router = express.Router();
const hostingController = require('../controllers/hostingController');

router.post('/web', hostingController.createWebHosting);
router.post('/email', hostingController.createEmailHosting);

module.exports = router;

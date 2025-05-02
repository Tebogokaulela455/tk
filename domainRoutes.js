
const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

router.post('/register', domainController.registerDomain);
router.post('/transfer', domainController.transferDomain);

module.exports = router;

const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.post('/generate', ctrl.qrgen.generate);
// router.post('/logout', ctrl.auth.logout);


module.exports = router
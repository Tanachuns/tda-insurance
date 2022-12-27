const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.post('/signup', ctrl.auth.signup);
router.get('/login', ctrl.auth.login);


module.exports = router
const express = require('express');
const router = express.Router();

const { create } = require('../controllers/register');

router.post('/register/create/', create);

module.exports = router;

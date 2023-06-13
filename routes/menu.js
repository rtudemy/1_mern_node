const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require('../controllers/menu');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.post('/menu/create/:userId',requireSignin, isAuth, isAdmin,create);
router.get('/menu', list);

router.param('userId', userById);


module.exports = router;

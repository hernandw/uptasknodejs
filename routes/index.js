const express = require('express');
const router = express.Router();
const proyectos = require('../controller/proyectos.controllers');



router.get('/', proyectos.home);

module.exports = router
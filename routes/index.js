const express = require('express');
const router = express.Router();
const proyectos = require('../controller/proyectos.controllers');



router.get('/', proyectos.home);

router.get('/nuevo-proyecto', proyectos.formulario);

router.post('/nuevo-proyecto', proyectos.nuevoProyecto);

router.get('/:url', proyectos.proyectosPorUrl);

module.exports = router
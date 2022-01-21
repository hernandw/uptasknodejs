const express = require('express');
const router = express.Router();
const proyectos = require('../controller/proyectos.controllers');



router.get('/', proyectos.home);

router.get('/nuevo-proyecto', proyectos.formulario);

router.post('/nuevo-proyecto', proyectos.nuevoProyecto);

router.get('/editar/:url', proyectos.proyectosPorUrl);

router.get('/editar/:id', proyectos.formularioEditar)

router.post('/nuevo-proyecto/:id', proyectos.updateProyecto)

module.exports = router
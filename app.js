const express = require('express');
const app = express();
require('dotenv').config({path: '.env'});
const PORT = process.env.PORT || 5000;
const path = require('path');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Rutas
app.use(require('./routes/index'));

//Template engine
app.set('view engine', 'pug');

//Anadir las vistas
app.set('views', path.join(__dirname,  './views'))


//Archivos estáticos
app.use(express.static('public'));

//Levantar Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor activo en puerto ${PORT}`);
})




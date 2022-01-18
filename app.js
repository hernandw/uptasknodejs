const express = require('express');
const app = express();
require('dotenv').config({path: '.env'});
const PORT = process.env.PORT || 5000;
const path = require('path');

//Rutas
app.use(require('./routes/index'));

//Template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,  './views'))

//Levantar Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor activo en puerto ${PORT}`);
})




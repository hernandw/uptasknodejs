const express = require('express');
const app = express();
require('dotenv').config({path: '.env'});
const PORT = process.env.PORT || 5000;
const path = require('path');
const sequelize = require('./config/db');
require('./models/project');

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
app.listen(PORT, async ()=>{
    console.log(`Servidor activo en puerto ${PORT}`);

    //Conexión a la BBDD
    try {
        await sequelize.sync({ force: false});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})




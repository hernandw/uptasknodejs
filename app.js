const express = require('express');
const app = express();
require('dotenv').config({path: '.env'});
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Servidor activo en puerto ${PORT}`);
})




exports.home = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formulario = (req, res) => {
    res.render('nuevoproyecto', {

        nombrePagina: 'nuevos proyectos'
    })
}

exports.nuevoProyecto = (req, res) => {
   const { nombre } =  req.body
   
   // Valida que el input no esté vacio
   let errores = [];

   if(!nombre){
       errores.push({texto: ' Agrega un nombre al proyecto' })
   }

   //Si hay errores
   if(errores.length > 0){
       res.render('nuevoProyecto', {
           nombrePagina: 'Nuevo Proyecto',
           errores
       })
   }

   
}
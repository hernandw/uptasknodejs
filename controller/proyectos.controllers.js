const proyectos = require('../models/project')

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

exports.nuevoProyecto = async (req, res) => {
  const { name } = req.body;

  // Valida que el input no esté vacio
  let errores = [];

  if (!name) {
    errores.push({ texto: " Agrega un nombre al proyecto" });
  }

  //Si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
    });
  } else {
    //Inserta registro en la BBDD
    try {
      const project = await proyectos.create({ name });
    } catch (error) {
      console.log("Error al guardar los datos" + error);
    }
    res.redirect("/");
  }
};
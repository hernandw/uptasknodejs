const proyectos = require('../models/project')
const slug = require('slug');


exports.home = async (req, res) => {
    const projects = await proyectos.findAll();
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        projects
    })
}

exports.formulario = async (req, res) => {
    const projects = await proyectos.findAll();
    res.render('nuevoproyecto', {

        nombrePagina: 'nuevos proyectos',
        projects
    })
}

exports.nuevoProyecto = async (req, res) => {
    const projects = await proyectos.findAll();
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
      projects
    });
  } else {
    //Inserta registro en la BBDD
    try {
        const url = slug(name).toLowerCase().trim()
      const project = await proyectos.create({ name, url });
      
    } catch (error) {
      console.log("Error al guardar los datos " + error);
    } 
    res.redirect("/");
  }
};

exports.proyectosPorUrl = async (req, res, next) =>{
    const projects = await proyectos.findAll();
   const proyecto = await proyectos.findOne({
       where: {
           url: req.params.url
       }
    })
    if(!proyecto){
        return next()
    }
    
    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        projects,
        proyecto
    })
}

exports.formularioEditar = async (req, res) => {
  const projectsPromise = proyectos.findAll();
  const proyectoPromise = proyectos.findOne({
    where: {
        id: req.params.id
    }
 });

 const [projects, proyecto] = await Promise.all([projectsPromise, proyectoPromise])
  res.render('nuevoproyecto', {
    nombrePagina: 'Editar Proyecto',
    projects,
    proyecto
  })
}

exports.updateProyecto = async (req, res) => {
  const projects = await proyectos.findAll();
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
    projects
  });
} else {
  //Inserta registro en la BBDD
  try {
      const url = slug(name).toLowerCase().trim()
    const project = await proyectos.update({ name, url },{
      where: {
        id: req.params.id
      }
    }
      );
    
  } catch (error) {
    console.log("Error al guardar los datos " + error);
  } 
  res.redirect("/");
}
};
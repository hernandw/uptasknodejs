const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Project = sequelize.define('project', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  }
  
}, {
  timestamps: false
});

// `sequelize.define` also returns the model
console.log(Project === sequelize.models.project); // true

module.exports = Project;
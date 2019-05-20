'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    menuname: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
  };
  return menu;
};
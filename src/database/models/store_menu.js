"use strict";
module.exports = (sequelize, DataTypes) => {
  const store_menu = sequelize.define(
    "store_menu",
    {
      store_id: DataTypes.INTEGER,
      menu_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      count: DataTypes.INTEGER
    },
    {}
  );
  store_menu.associate = function(models) {
    // associations can be defined here
    store_menu.hasMany(models.menu, {
      foreignKey: "id"
    });
  };
  return store_menu;
};

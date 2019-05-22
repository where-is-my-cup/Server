"use strict";
module.exports = (sequelize, DataTypes) => {
  const store_user = sequelize.define(
    "store_user",
    {
      store_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      orderDate: DataTypes.DATE
    },
    {}
  );
  store_user.associate = function(models) {
    models.store_user.belongsTo(models.store, {
      foreignKey: "id"
    });
  };
  return store_user;
};

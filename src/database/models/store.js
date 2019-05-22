"use strict";
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define(
    "store",
    {
      storename: DataTypes.STRING,
      address: DataTypes.STRING,
      tel: DataTypes.STRING
    },
    {}
  );
  store.associate = function(models) {
    models.store.hasOne(models.store_user, {
      foreignKey: "store_id",
      targetKey: "store_id"
    });
  };
  return store;
};

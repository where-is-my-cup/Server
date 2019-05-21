'use strict';
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define('store', {
    storename: DataTypes.STRING,
    address: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {});
  store.associate = function(models) {
    // associations can be defined here
  };
  return store;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    loginId: DataTypes.STRING,
    password: DataTypes.STRING,
    nicname: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
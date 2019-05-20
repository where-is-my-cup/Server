"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      loginId: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      admin: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};

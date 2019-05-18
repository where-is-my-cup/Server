"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "users",
    {
      loginId: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      loginId: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      storeId: DataTypes.INTEGER
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

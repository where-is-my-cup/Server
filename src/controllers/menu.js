const express = require("express");
const models = require("../database/models");

module.exports = {
  menuList: async (request, response) => {
    var store_id = request.query.storeId;
    let menuList = await models.store_menu.findAll({
      include: [
        {
          model: models.menu
        }
      ],
      where: { store_id: store_id }
    });
    response.json(menuList);
  },
  menuListAll: async (request, response) => {
    let menulist = await models.menu.findAll();
    response.json(menulist);
  },
  storeList: async (request, response) => {
    var user_id = 2;
    let storeList = await models.store_user.findAll({
      include: [
        {
          model: models.store
        }
      ],
      where: { user_id: user_id }
    });
    response.json(storeList);
  }
};

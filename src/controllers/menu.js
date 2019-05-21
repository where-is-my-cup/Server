const express = require("express");
const router = express.Router();
const models = require("../database/models");

module.exports = {
  menuList: async (request, response) => {
    var store_id = 2;
    let menuList = await models.store_menu.findAll({
      include: [
        {
          model: models.menu
        }
      ],
      where: { store_id: store_id }
    });
    response.json(menuList);
  }
};

const models = require("../database/models");

module.exports = {
  menuList: async (request, response) => {
    var store_id = 2;
    let menuList = await models.store_menu.findAll({
      where: { store_id: store_id },
      include: { model: models.menu }
    });
    console.log(menuList);
    response.json(menuList);
  },
  inventory: async (request, response) => {
    let { id, price, count } = request.body;
    let menuList = await models.store_menu.update(
      {
        price,
        count
      },
      { where: { id } }
    );
    if (menuList) {
      response.json(true);
    } else {
      response.json(false);
    }
  }
};

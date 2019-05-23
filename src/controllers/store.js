const models = require("../database/models");
const connection = require("../database/config");

module.exports = {
  menuList: async (request, response) => {
    var store_id = request.headers.token.storeId;
    var query =
      "select store_menus.id , store_menus.price , store_menus.count , menus.menuname , menus.category, menus.imageURL from store_menus left join menus on store_menus.menu_id = menus.id where store_menus.store_id = " +
      store_id;
    connection.query(query, function(err, rows, fields) {
      console.log(rows);
      if (!err) response.json(rows);
      else console.log("Error while performing Query.", err);
    });
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

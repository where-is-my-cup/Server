const models = require("../database/models");
const connection = require("../database/config");

module.exports = {
  menuList: async (request, response) => {
    var store_id = request.query.storeId;
    var query =
      "select store_menus.*, menus.* from store_menus left join menus on store_menus.menu_id = menus.id where store_menus.store_id = " +
      store_id;
    connection.query(query, function(err, rows, fields) {
      if (!err) response.json(rows);
      else console.log("Error while performing Query.", err);
    });
  },
  menuListAll: async (request, response) => {
    let menulist = await models.menu.findAll();
    response.json(menulist);
  },
  storeList: async (request, response) => {
    var user_id = request.query.userId;
    var query =
      "select store_users.*, stores.* from store_users left join stores on store_users.store_id = stores.id where store_users.user_id = " +
      user_id;
    connection.query(query, function(err, rows, fields) {
      if (!err) response.json(rows);
      else console.log("Error while performing Query.", err);
    });
  },
  storeListAll: async (request, response) => {
    let storeList = await models.store.findAll();
    response.json(storeList);
  },
  orderList: async (request, response) => {
    const { orderList, storeId, userId } = request.query;
    var today = new Date();
    var newdata = {
      store_id: storeId,
      user_id: userId,
      orderDate: today.getDate(),
      createdAt: today.getDate(),
      updatedAt: today.getDate()
    };
    var orders = {};
    for (var menu2 of orderList) {
      var menu = JSON.parse(menu2);
      var menuId = menu.selectMenu.menu_id;
      var storId = menu.storeId;
      var count = menu.selectMenu.count - menu.count;

      await models.store_menu.update(
        { count: count },
        {
          where: { menu_id: menuId, store_id: storId }
        }
      );
    }

    var store = await models.store_user.findAll({
      where: { store_id: storeId }
    });
    if (store.length === 0) {
      await models.store_user.create(newdata);
    }
  }
};

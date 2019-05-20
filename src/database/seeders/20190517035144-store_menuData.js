"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "store_menus",
      [
        {
          store_id: "2",
          menu_id: "1",
          price: 4100,
          count: 49,
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          store_id: "2",
          menu_id: "2",
          price: 4800,
          count: 30,
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          store_id: "2",
          menu_id: "3",
          price: 6100,
          count: 24,
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          store_id: "3",
          menu_id: "2",
          price: 4800,
          count: 10,
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

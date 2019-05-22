"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stores",
      [
        {
          storeName: "성수점",
          address: "서울 특별시 송파구 아차산로 46",
          Tel: "02-1123-1577",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
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

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stores",
      [
        {
          storeName: "성수점",
          address: "서울 특별시 아차산로 46",
          Tel: "02-1123-1577",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          storeName: "가락점",
          address: "서울 특별시 송파구 가락동",
          Tel: "02-1123-1577",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          storeName: "구미점",
          address: "경북 구미시 옥계동",
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

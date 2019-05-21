"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stores",
      [
        {
          storename: "성수점",
          address: "성수동 1가",
          tel: "02-913-5580",
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          storename: "건대입구점",
          address: "건대역근처",
          tel: "02-943-7580",
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          storename: "뚝섬역점",
          address: "뚝섬연근처",
          tel: "02-983-8280",
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

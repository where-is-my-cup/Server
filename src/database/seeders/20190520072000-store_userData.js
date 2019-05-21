"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "store_users",
      [
        {
          store_id: 1,
          user_id: 2,
          orderDate: "1993-12-02",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          store_id: 2,
          user_id: 2,
          orderDate: "1993-06-02",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          store_id: 3,
          user_id: 2,
          orderDate: "1996-02-02",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          store_id: 1,
          user_id: 1,
          orderDate: "1994-04-02",
          createdAt: "1993-02-02",
          updatedAt: "1993-02-02"
        },
        {
          store_id: 2,
          user_id: 1,
          orderDate: "1963-12-02",
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

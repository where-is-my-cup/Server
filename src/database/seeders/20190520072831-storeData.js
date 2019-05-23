"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stores",
      [
        {
          storeName: "성수역",
          address: "서울특별시 성동구 성수이로 94 (성수동2가)",
          Tel: "02-469-3460",
          createdAt: "1991-08-15",
          updatedAt: "1995-11-18"
        },
        {
          storeName: "성수이마트",
          address: "서울특별시 성동구 뚝섬로 379 (성수동2가)",
          Tel: "02-758-8282",
          createdAt: "1995-11-18",
          updatedAt: "1993-02-02"
        },
        {
          storeName: "뚝섬역",
          address: "서울특별시 성동구 아차산로 42 (성수동1가)",
          Tel: "02-469-3488",
          createdAt: "1993-02-26",
          updatedAt: "1993-02-02"
        },
        {
          storeName: "종각",
          address: "서울특별시 종로구 종로64 (종로2가)",
          Tel: "02-758-8169",
          createdAt: "1989-05-19",
          updatedAt: "1993-02-02"
        },
        {
          storeName: "을지로삼화타워",
          address: "서울특별시 중구 을지로5길 16 삼화타워1층",
          Tel: "02-758-8483",
          createdAt: "1991-10-18",
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

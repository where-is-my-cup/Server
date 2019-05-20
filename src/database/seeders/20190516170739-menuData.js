"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "menus",
      [
        {
          menuname: "아메리카노",
          category: "카페인",
          description:
            "헤네시스 원두에서 추출한 아주 고소한 커피 (HP를 10% 회복시켜준다.)",
          imageURL: "americano.png",
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          menuname: "카페라떼",
          category: "카페인",
          description:
            "헤네시스에서 자란 버섯을 넣은 커피. 매우 맛이 없는게 특징이다.",
          imageURL: "ratte.png",
          createdAt: "2019-03-04",
          updatedAt: "2019-03-03"
        },
        {
          menuname: "초콜릿 케익",
          category: "디저트",
          description:
            "신비의 밀가루를 섞어 만든 달콤한 디저트이다. (피로도를 50% 회복시켜준다.)",
          imageURL: "chocolateCake.png",
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

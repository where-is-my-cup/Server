"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "menus",
      [
        {
          menuname: "에스프레소",
          category: "COFFEE",
          description: "",
          imageURL: "Espresso.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "아메리카노",
          category: "COFFEE",
          description: "",
          imageURL: "Americano.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "카페라떼",
          category: "COFFEE",
          description: "",
          imageURL: "CafeLatte.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "카푸치노",
          category: "COFFEE",
          description: "",
          imageURL: "Cappuchino.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "바닐라라떼",
          category: "COFFEE",
          description: "",
          imageURL: "VanillaLatte.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "페퍼민트",
          category: "BEVERAGE",
          description: "",
          imageURL: "Peppermint.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "얼그레이",
          category: "BEVERAGE",
          description: "",
          imageURL: "EarlGrey.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "자스민",
          category: "BEVERAGE",
          description: "",
          imageURL: "Jasmine.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "민트초코",
          category: "BEVERAGE",
          description: "",
          imageURL: "Mintchocolate.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "키위",
          category: "JUICE",
          description: "",
          imageURL: "Kiwi.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "토마토",
          category: "JUICE",
          description: "",
          imageURL: "Tomato.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "바나나",
          category: "JUICE",
          description: "",
          imageURL: "Banana.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "레몬",
          category: "JUICE",
          description: "",
          imageURL: "Lemon.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "자몽",
          category: "JUICE",
          description: "",
          imageURL: "Grapefruit.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "프레즐",
          category: "DESSERT",
          description: "",
          imageURL: "Pretzle.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "모카번",
          category: "DESSERT",
          description: "",
          imageURL: "MochaBurn.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "초콜렛케익",
          category: "DESSERT",
          description: "",
          imageURL: "Chocolatecake.jpg",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "치즈케익",
          category: "DESSERT",
          description: "",
          imageURL: "Cheesecake.jpg",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
        },
        {
          menuname: "샌드위치",
          category: "DESSERT",
          description: "",
          imageURL: "Sandwich.png",
          createdAt: "0001-01-01",
          updatedAt: "0001-01-01"
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

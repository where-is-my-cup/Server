"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          loginId: "admin1",
          password:
            "w57PYkqFsV1fFwz9SE7pguD0yj5G+w+/Xak6AcC/DQ85cowgiCWwrATQyR/AJmtia8zMUKXuunfa4utLe6937Q==",
          nickname: "성수역점장",
          admin: 1,
          createdAt: "2019-05-23 08:43:00",
          storeId: 1,
          updatedAt: "2019-05-23 08:43:00"
        },
        {
          id: 2,
          loginId: "admin2",
          password:
            "pry15WzIjHnmF2YPjF823rk0MF60RuurhPIXsuLKrRlRBtkQAmgAxvIxg6MgxLM1y+os96MHwck1PVBGevG+EA==",
          nickname: "성수이마트점장",
          admin: 1,
          createdAt: "2019-05-23 08:43:31",
          storeId: 2,
          updatedAt: "2019-05-23 08:43:31"
        },
        {
          id: 3,
          loginId: "admin3",
          password:
            "07aG7I8H2Hp5kIT+yn8hneeBn2fRDsXdCbcftcV7mHUf1stwYekPomSgqbOnX1g9OoETzF5RnL5CSDhwpZpmeA==",
          nickname: "뚝섬역점장",
          admin: 1,
          createdAt: "2019-05-23 08:43:59",
          storeId: 3,
          updatedAt: "2019-05-23 08:43:59"
        },
        {
          id: 4,
          loginId: "admin4",
          password:
            "B4xdAbqQL68atEuKJxWQVqEVQmFNDcBG3O4ZWamZv5XYbI+99nD3oy7AVx4z9L3bS9yufkuJVOE/b1rf8Xpiqg==",
          nickname: "종각점장",
          admin: 1,
          createdAt: "2019-05-23 08:44:22",
          storeId: 4,
          updatedAt: "2019-05-23 08:44:22"
        },
        {
          id: 5,
          loginId: "admin5",
          password:
            "C1Mbh2vhonKk7WVt7WYXBc+4kj9rFS+gAimZ+/ZZ+TGzIkpM4WryWBuJjpcuG8Ued6KDojwEeLAD5bFRqiFPRg==",
          nickname: "을지로삼화타워점장",
          admin: 1,
          createdAt: "2019-05-23 08:44:53",
          storeId: 5,
          updatedAt: "2019-05-23 08:44:53"
        },
        {
          id: 6,
          loginId: "user1",
          password:
            "fcF5enVwagA+CxBXsnTEgZO4uAxsADYSml0tt6mZabPjCgxlAGx5ct0SQfvvt+TnuYDcXYm8fZ+MGNp0CVpgXw==",
          nickname: "유저1",
          admin: 0,
          createdAt: "2019-05-23 08:45:39",
          storeId: null,
          updatedAt: "2019-05-23 08:45:39"
        },
        {
          id: 7,
          loginId: "user2",
          password:
            "fcF5enVwagA+CxBXsnTEgZO4uAxsADYSml0tt6mZabPjCgxlAGx5ct0SQfvvt+TnuYDcXYm8fZ+MGNp0CVpgXw==",
          nickname: "유저2",
          admin: 0,
          createdAt: "2019-05-23 08:45:57",
          storeId: null,
          updatedAt: "2019-05-23 08:45:57"
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

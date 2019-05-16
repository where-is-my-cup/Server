const express = require("express");
const router = express.Router();

router.get("/menulist", (request, response) => {
  var list = [
    {
      name: "아메리카노",
      count: 3,
      category: "음료",
      price: "4,100",
      imgPath: "img_1.png"
    },
    {
      name: "카페라떼",
      count: 5,
      category: "음료",
      price: "4,800",
      imgPath: "img_2.png"
    },
    {
      name: "초콜릿 케익",
      count: 2,
      category: "디저트",
      price: "6,100",
      imgPath: "img_3.png"
    }
  ];
  response.json(list);
});
router.get("/category", (request, response) => {
  response.json(["음료", "디저트"]);
});

module.exports = router;

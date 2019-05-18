const models = require("../database/models");

module.exports = {
  login: {
    post: async (req, res) => {
      const users = await models.users.findAll();
    }
  },
  checkID: {
    post: async (req, res) => {
      const checkID = req.body.id;

      const result = await models.users.findOne({ where: { loginId: checkID } });

      !!result ? res.send(true) : res.send(false);
    }
  },
  checkNN: {
    post: async (req, res) => {
      const checkNN = req.body.nickName;

      const result = await models.users.findOne({ where: { nickname: checkNN } });

      !!result ? res.send(false) : res.send(true);
    }
  }
};

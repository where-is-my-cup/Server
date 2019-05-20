const models = require("../database/models");
const crypto = require("crypto");
const { salt } = require("../../secret/secret");
const util = require("util");
const user = require("./user/index");

module.exports = {
  login: {
    post: (req, res) => {
      const { isID, isPW, isAdmin } = req.body;

      const check = async data => {
        const { loginId, password, admin, nickname } = data.dataValues;

        if (!loginId) {
          res.send(false);
        } else {
          if (user.pwCheck(isPW, password, isAdmin, admin)) {
            const token = await user.token(nickname, admin);
            res.send({ message: true, token });
          } else {
            res.send(false);
          }
        }
      };
      console.log(isID);
      models.users.findOne({ where: { loginId: isID } }).then(check);
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
      const checkNN = req.body.nickname;

      const result = await models.users.findOne({ where: { nickname: checkNN } });

      !!result ? res.send(false) : res.send(true);
    }
  },
  signUp: {
    post: async (req, res) => {
      const { id, pw, nickname } = req.body;
      const admin = "false";
      crypto.pbkdf2 = util.promisify(crypto.pbkdf2);
      let result = await crypto
        .pbkdf2(pw, salt, 100000, 64, "sha512")
        .catch(err => console.log(err));
      result = result.toString("base64");
      await models.users
        .create({ loginId: id, password: result, nickname: nickname, admin: admin })
        .then(result => {
          res.send(result);
        });
    }
  }
};

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
        if (!data) {
          res.json(false);
        } else {
          const { loginId, password, admin, nickname, storeId } = data.dataValues;

          if (!loginId) {
            res.json(false);
          } else {
            let check = await user.pwCheck(isPW, password, isAdmin, admin);
            console.log(check);
            if (check) {
              const token = await user.token(nickname, admin, loginId, storeId);
              res.send({ check, nickname, admin, token, loginId, storeId });
            } else {
              res.json(false);
            }
          }
        }
      };
      models.user.findOne({ where: { loginId: isID } }).then(check);
    }
  },
  checkID: {
    post: async (req, res) => {
      const checkID = req.body.id;

      const result = await models.user.findOne({ where: { loginId: checkID } });

      !!result ? res.send(true) : res.send(false);
    }
  },
  checkNN: {
    post: async (req, res) => {
      const checkNN = req.body.nickname;

      const result = await models.user.findOne({ where: { nickname: checkNN } });

      !!result ? res.send(false) : res.send(true);
    }
  },
  signUp: {
    post: async (req, res) => {
      const { id, pw, nickname } = req.body;
      const admin = false;
      crypto.pbkdf2 = util.promisify(crypto.pbkdf2);
      let result = await crypto
        .pbkdf2(pw, salt, 100000, 64, "sha512")
        .catch(err => console.log(err));
      result = result.toString("base64");
      await models.user
        .create({ loginId: id, password: result, nickname: nickname, admin: admin })
        .then(result => {
          res.send(result);
        });
    }
  }
};

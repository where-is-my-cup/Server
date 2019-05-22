const jwt = require("jsonwebtoken");
const { salt } = require("../../../secret/secret");

const token = (nickname, admin, loginId, storeId) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        nickname,
        admin,
        loginId,
        storeId
      },
      salt,
      {
        expiresIn: "7d",
        issuer: "cupholder.com",
        subject: "userInfo"
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
module.exports = token;

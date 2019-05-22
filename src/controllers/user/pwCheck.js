const { salt } = require("../../../secret/secret");
const crypto = require("crypto");
const util = require("util");

const pwCheck = async (isPW, password, isAdmin, admin) => {
  crypto.pbkdf2 = util.promisify(crypto.pbkdf2);
  let cryptoPW = await crypto
    .pbkdf2(isPW, salt, 100000, 64, "sha512")
    .catch(err => console.log(err));
  cryptoPW = cryptoPW.toString("base64");
  console.log(cryptoPW === password, isAdmin, Boolean(admin));
  return cryptoPW === password && isAdmin === Boolean(admin);
};

module.exports = pwCheck;

require("dotenv").config();

const fs = require('fs');
const path = require('path');
const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

var jwt = require("jsonwebtoken");
const baseConfig = require('../configs/base_location');
let issuer = baseConfig.base_url;

exports.issueToken = function(useremail, role) {
  const token = jwt.sign(
    {
      sub: useremail,
      iat: Date.now(),
      iss: issuer,
      role: role
    },
    PRIV_KEY,
    {
      expiresIn: 3600 * process.env.TOKEN_EXPIRATION_HOUR, 
      algorithm: 'RS256'
    }
  ); 

  return token;
};

const jwt = require('jsonwebtoken');
const { config } = require('../../config/index');

async function generate(payloadTokenData) {
  try {
    const token = await jwt.sign(payloadTokenData, config.authJwtSecret, {
      expiresIn: config.expireTimeToken * 1000 || 600000,
      algorithm: config.algorithmToken || 'HS256'
    });
    return token;
  } catch (error) {
    return null;
  }
}

async function verify(token) {
  try {
    const certificated = await jwt.verify(token, config.authJwtSecret, {
      algorithm: [config.algorithmToken]
    });
    return certificated;
  } catch (error) {
    return null;
  }
}

async function decode(token) {
  try {
    const tokenDecode = await jwt.decode(token, config.authJwtSecret, {
      algorithm: [config.algorithmToken]
    });
    return tokenDecode;
  } catch (error) {
    return null;
  }
}


module.exports = {
  generate,
  verify,
  decode
};

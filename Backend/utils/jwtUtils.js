const jwt = require("jsonwebtoken");
const env = require("../config/env");

const generateToken = (payload) => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { generateToken };

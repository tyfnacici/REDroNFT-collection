require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
  },
};

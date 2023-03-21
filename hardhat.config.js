require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    arbitrum:{
      url: "",
      accounts: [process.env.OPEN_SOURCE_PKEY]
    }
  }
};

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    arbitrum:{
      url: "https://arb-mainnet.g.alchemy.com/v2/PrToIvsX83wdgzTw6V0-nipEzTurWRK7",
      accounts: [process.env.OPEN_SOURCE_PKEY]
    }
  }
};

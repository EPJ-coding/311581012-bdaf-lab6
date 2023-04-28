require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ENDPOINT_URL = process.env.GOERLI_URL;

module.exports = {
  solidity: "0.8.0",
  
  networks: {
    goerli: {
      url: ENDPOINT_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
 }
  
};
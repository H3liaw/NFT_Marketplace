require("@nomicfoundation/hardhat-toolbox");
import * as dotenv from "dotenv";

dotenv.config();
const privateKey =
process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [`${privateKey}`, `${privateKey2}`],
      verify: {
        etherscan: {
          apiKey: "",
          apiUrl: ""
        }
      }
    },
    polygan: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      accounts: [`${privateKey}`, `${privateKey2}`],
      verify: {
        etherscan: {
          apiKey: "",
          apiUrl: ""
        }
      }
    }
  },
  solidity: "0.8.4",
};

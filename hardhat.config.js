require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [process.env.privateKey] ,
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
      accounts: [process.env.privateKey],
      verify: {
        etherscan: {
          apiKey: "",
          apiUrl: ""
        }
      }
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

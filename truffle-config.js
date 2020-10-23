require('dotenv').config({path: '.env'});

const HDWalletProvider = require('truffle-hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY.trim();

const infuraApiKey = process.env.INFURA_API_KEY.trim();

module.exports = {

      networks: {
        development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*" // Match any network id
        },

        ropsten: {
          provider: function() { 
            return new HDWalletProvider([privateKey], `https://ropsten.infura.io/v3/${ infuraApiKey }`) 
          },
          network_id: '3',
          gas: 4500000,
          gasPrice: 10000000000,
        },
      },

      compilers: {
        solc: {
          version: "0.4.24",
          optimizer: {
            enabled: true,
            runs: 999
          }
        }
      }
};


require('dotenv').config();
//require('babel-register');
//require('babel-polyfill');
const HDWalletPriver = require("@truffle/hdwallet-provider");

new HDWalletPriver(
    process.env.PRIVATE_KEY,
    `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
)


module.exports = {
    networks:{
        ropsten:{
            provider: function(){
               return new HDWalletPriver(
                    process.env.PRIVATE_KEY,
                    `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
                )
            },
            gasPrice: 25000000000,
            network_id:3
        },
    },
    development:{
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
    },

    contracts_directory: './contracts/',
    contracts_build_directory: './abis/',
    compilers: {
        solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
        }
    }
}
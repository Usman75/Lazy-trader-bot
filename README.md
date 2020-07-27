# Lazy-trader-bot

Lazy-trader-bot is a NodeJS Console based application that fetches ETH/USD price every second using a Chainlink reference data contract.
Auto Swap the ETH to DAI when the ETH price falls below to predefined ETH/USD price.


## Demo 
 ![Demo](https://github.com/Usman75/Lazy-trader-bot/blob/master/demo.gif)

## How to Run:
1. Clone the repositorie git clone
``` https://github.com/Usman75/Lazy-trader-bot.git ``` 
2.  ``` cd Lazy-trader-bot ```
3.  Create a new file and name it ``` .env ```
4. Past the following code:
```
RPC_URL="https://ropsten.infura.io/v3/YOUR_API_KEY"
INFURA_API_KEY="YOUR _INFURA_API_KEY"
PRIVATE_KEY="0x..."
ACCOUNT="0x..."
```

5. ``` npm install ```
6. ```truffle compile ```
7. ```truffle migrate --network ropsten ```
8. ```npm run start  ```

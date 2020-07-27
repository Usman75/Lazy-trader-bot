pragma solidity >=0.4.21 <0.6.0;


import "@chainlink/contracts/src/v0.5/interfaces/AggregatorInterface.sol";

contract PriceConsumer {

    AggregatorInterface internal priceFeed;
    /**
     * Network: Ropsten
     * Aggregator: ETH/USD
     * Address: 0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507
     */
    constructor() public {
        priceFeed = AggregatorInterface(0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507);
    }
     /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    /**
     * Returns the timestamp of the latest price update
     */
    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}

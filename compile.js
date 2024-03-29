const path = require("path");
const fs = require("fs");
const solc = require("solc");

const auctionPath = path.resolve(__dirname, "contracts", "Auction.sol");
const source = fs.readFileSync(auctionPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Auction.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Auction.sol"
].Auction;

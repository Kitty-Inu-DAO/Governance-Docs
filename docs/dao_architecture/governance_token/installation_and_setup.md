---
id: installation_and_setup
title: Installation and Setup
tags:
  - installation
  - development
  - erc20
  - architecture
---

# Installation and Setup

----------------------------------------------------------------------------

The Kitty Inu Token is a smart contract deployed on the Ethereum blockchain. To interact with it, you'll need to have an Ethereum compatible wallet and, if you're a developer, some additional tooling.

## Prerequisites

1. **Ethereum Wallet**: If you're an end user looking to hold or transact with Kitty Inu tokens, you'll need an Ethereum wallet. Wallets like Metamask, Trust Wallet, and Coinbase Wallet are widely used.

2. **Ethereum Node or Provider**: For developers who want to interact with the Kitty Inu contract programmatically, you'll need access to an Ethereum node. If you're not running your own node, you can use services like Infura or Alchemy.

3. **Development Environment**: If you're a developer and want to interact with the contract via code, you'll need a development environment. The most popular is Hardhat, which works well with Solidity contracts.

4. **Ether**: Whether you're an end user or a developer, you'll need Ether (ETH) in your wallet to pay for transaction fees on the Ethereum network, also known as gas fees.


## Setup for End Users

1. Add Kitty Inu token to your Ethereum Wallet. You'll need the contract address, which is [0x61a35258107563f6b6f102ae25490901c8760b12](https://etherscan.io/address/0x61a35258107563f6b6f102ae25490901c8760b12).

2. You can acquire Kitty Inu tokens from any supported exchange. Make sure to withdraw them to the same wallet you set up earlier.

3. Congratulations! You can now send, receive, and hold Kitty Inu tokens!

## Setup for Developers

1. Install Hardhat in your project directory using npm:

```
npm install --save-dev hardhat
```

2. Install the ethers.js library, a set of utilities to interact with the Ethereum blockchain:

```
npm install --save ethers
```

3. In your Hardhat project, you'll need to setup your environment variables including the Kitty Inu contract address and your Ethereum node provider URLs. An `.env` file is a common solution.

4. With Hardhat and ethers.js, you can now write scripts or tests to interact with the Kitty Inu contract. For example, checking the balance of a wallet would look something like this:

```js
const { ethers } = require("ethers");

async function main() {
    const tokenAddress = "0x61a35258107563f6b6f102ae25490901c8760b12";
    const walletAddress = "<INSERT_WALLET_ADDRESS_HERE>";
  
    const provider = new ethers.providers.JsonRpcProvider("<INSERT_ETHEREUM_NODE_URL_HERE>");
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);

    console.log(`Balance: ${ethers.utils.formatEther(balance)}`);
}

main();
```

Replace `<INSERT_WALLET_ADDRESS_HERE>`, and `<INSERT_ETHEREUM_NODE_URL_HERE>` with your specific details.


5. More advanced operations involve making transactions. Remember, all transactions require gas, which is paid in ETH.

6. Congratulations! You're ready to interact programmatically with the Kitty Inu contract.




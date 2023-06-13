---
id: usage_instructions
title: Usage Instructions
tags:
  - usage
  - development
  - erc20
  - architecture
---

# Usage Instructions

----------------------------------------------------------------------------

## For End Users

### Sending Kitty Inu Tokens

1. In your Ethereum wallet, navigate to the 'Send' feature.

2. In the recipient field, enter the Ethereum address of the recipient.

3. Enter the amount of Kitty Inu tokens you want to send. Please ensure you have sufficient balance.

4. Confirm the transaction. You'll need to pay a gas fee in ETH.

### Receiving Kitty Inu Tokens

1. To receive Kitty Inu tokens, provide the sender with your Ethereum wallet address.

2. Once the sender has confirmed the transaction, the Kitty Inu tokens will appear in your wallet balance.

## Developers


Developers can interact with the Kitty Inu contract programmatically using ethers.js. The following examples demonstrate common operations.

### Checking the Balance

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

### Sending Kitty Inu Tokens

To send Kitty Inu tokens programmatically, use the `transfer` function:

```js
const { ethers } = require("ethers");

async function main() {
    const tokenAddress = "0x61a35258107563f6b6f102ae25490901c8760b12";
    const recipientAddress = "<INSERT_RECIPIENT_ADDRESS_HERE>";
    const amount = ethers.utils.parseEther("10"); // for 10 Kitty Inu tokens
  
    const provider = new ethers.providers.JsonRpcProvider("<INSERT_ETHEREUM_NODE_URL_HERE>");
    const signer = provider.getSigner("<INSERT_SENDER_PRIVATE_KEY>");
    const contract = new ethers.Contract(tokenAddress, abi, signer);

    const tx = await contract.transfer(recipientAddress, amount);
    console.log(`Transaction hash: ${tx.hash}`);
    
    const receipt = await tx.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
}

main();
```

Replace `<INSERT_RECIPIENT_ADDRESS_HERE>`, `<INSERT_SENDER_PRIVATE_KEY>`, and `<INSERT_ETHEREUM_NODE_URL_HERE>` with your specific details.

Remember, you should NEVER share your private key with anyone and it should NOT be hard-coded into your program. Instead, store it securely and retrieve it as an environment variable.





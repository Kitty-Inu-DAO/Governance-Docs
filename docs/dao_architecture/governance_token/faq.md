---
id: faq
title: FAQ
tags:
  - faq
  - development
  - erc20
  - architecture
---

# Frequently Asked Questions (FAQs)

----------------------------------------------------------------------------

## 1. What is the Kitty Inu token?

Kitty Inu is an ERC20 token based on the Ethereum blockchain, with some additional functionality. It is designed to be used in the Kitty Inu ecosystem for a variety of purposes such as governance, staking, and more.

## 2. How can I interact with the Kitty Inu token contract?

You can interact with the Kitty Inu token contract by using a Web3 compatible browser wallet like MetaMask or by using Web3 libraries in programming languages such as JavaScript and Python. Please see our Usage Instructions section for more information.

## 3. How can I get the Kitty Inu token?

Please visit the official Kitty Inu website for information on how to obtain the Kitty Inu token. Note that transactions on the Ethereum network require Ether (ETH) for gas fees, so you will need to have some ETH in your wallet as well.

## 4. What does the `pause` function do?

The `pause` function stops all token transfers, approvals, and burnings. This function can only be called by the contract owner, which is the DAO multisig. It is useful for migrations and upgrades to the contract if need ever be.

## 5. What is the purpose of the `snapshot` function?

The `snapshot` function creates a record of all current token balances. This snapshot can later be used to determine token balances at the time the snapshot was taken. This is useful for functionalities like distributing airdrops.

## 6. What is the `setBlockedAddresses` function for?

This function is used by the contract owner, the DAO multisig, to prevent certain addresses from making transactions. This can be useful for preventing known malicious addresses from interacting with the contract and additionally adds a backstop in the event of a hack. 

## 7. What does the `ERC20Permit` extension do?

`ERC20Permit` is an extension of the `ERC20` token standard that adds a `permit` function, which allows a holder to allow another account to spend their tokens. This approval can be done with a signature, without the need for a transaction.

## 8. Can I contribute to the Kitty Inu project?

Absolutely! We encourage community participation in all aspects of our project. Whether you're a developer, a designer, or just a cryptocurrency enthusiast, we'd love to have your input. Please see our GitHub for more details on how to contribute.

## 9. How can I get more information about the Kitty Inu project?

For the most detailed and up-to-date information, please refer to our official documentation. For specific questions or discussions, feel free to join our community on Discord or Telegram.

Please note that this is not financial advice, and we recommend doing your own research and making your own informed decisions when dealing with cryptocurrency.


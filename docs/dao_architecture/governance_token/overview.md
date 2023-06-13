---
id: overview
title: Overview
tags:
  - overview
  - erc20
  - architecture
---

# Kitty Inu Token Overview

----------------------------------------------------------------------------

The Kitty Inu Token (`kitty`), is the heart of the Kitty Inu ecosystem, a playful, meme-inspired project with serious functionality. Built using Solidity language on the Ethereum blockchain, Kitty Inu utilizes the robust OpenZeppelin smart contracts library to ensure security and compliance with established ERC20 standards.

`kitty` is not just an ERC20 token, but also an ERC20Burnable and ERC20Snapshot token, giving it additional capabilities beyond the standard functionalities of an ERC20 token.

## Key Features

**ERC20**: The Kitty Inu Token adheres to the ERC20 standards, meaning it can be transferred, approved, and have a balance checked like any other ERC20 token.

**ERC20Burnable**: The Kitty Inu token can be "burned", meaning users can destroy their tokens if they wish, reducing the total supply and potentially increasing the value of remaining tokens.

**ERC20Snapshot**: Kitty Inu also supports the ERC20Snapshot extension. This means the contract can create a snapshot of token balances at a particular point in time. This feature is valuable for voting and dividend distribution purposes.

**Pausable**: In extraordinary situations, the contract owner has the ability to pause all token transfers. This function is important for mitigating potential threats or responding to security incidents.

**ERC20Permit**: Kitty Inu token allows holders to authorize a third party (like a smart contract) to transfer tokens from their account via a signed message, rather than requiring an approval transaction.

**Address Blocking**: The Kitty Inu contract includes an additional security measure, giving the owner the ability to block specific addresses from sending or receiving tokens. This is a crucial feature for risk management and scam prevention.

**Transfer Protection**: Kitty Inu token has a toggle feature that allows the contract owner to activate or deactivate the address blocking feature for all transfers.

In the following sections, we'll explore each of these features in detail, as well as guide you through the setup, usage, and integration processes. Whether you're a holder, a prospective user, or a developer, we hope this documentation provides all the information you need about Kitty Inu Token.
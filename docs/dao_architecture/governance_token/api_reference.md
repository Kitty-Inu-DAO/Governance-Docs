---
id: api_reference
title: API Reference
tags:
  - api-reference
  - erc20
  - architecture
---

# Kitty Inu ERC20 API Reference

----------------------------------------------------------------------------

This document describes the KittyInu contract, an ERC20 compliant token with additional features such as burnability, snapshotting, ownership management, pausability, and EIP-2612 permit for signature-based approvals.

## Table of Contents
1. [Overview - Contract Code](#1-overview---contract-code)
2. [Read Functions](#2-read-functions)
3. [Write Functions](#3-write-functions)
4. [Privileges](#4-privileges)
5. [Exceptions](#5-exceptions)
6. [Notes](#6-notes)

### 1. Overview - Contract Code

```solidity
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

error blockedAddress();
contract KittyInu is
    ERC20, 
    ERC20Burnable, 
    ERC20Snapshot, 
    Ownable,
    Pausable,
    ERC20Permit 
{
        
    string public constant NAME = "Kitty Inu";
    string public constant SYMBOL = "kitty";

    uint256 public tSupply = 731_738_978_480;

    bool public transferProtection = false;
    mapping(address => bool) private blockedTransfers;

    constructor() ERC20(NAME, SYMBOL) ERC20Permit(NAME) {
        _mint(msg.sender, tSupply * 10 ** decimals());
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function setBlockedAddresses(address account, bool blocked) public onlyOwner {
        blockedTransfers[account] = blocked;
    }

    function setProtectionSettingsTransfer(bool transferProtect) external onlyOwner {
        transferProtection  = transferProtect;
    }

    function isBlocked(address account) public view returns (bool) {
        return blockedTransfers[account];
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20, ERC20Snapshot)
    {
        if(transferProtection){
            if(blockedTransfers[from] || blockedTransfers[to]) revert blockedAddress();
        }
        super._beforeTokenTransfer(from, to, amount);
    }
}
```

### 2. Read Functions

#### `NAME` 
```solidity
string public constant NAME;
```
Returns the name of the token - "Kitty Inu".

#### `SYMBOL`
```solidity
string public constant SYMBOL;
```
Returns the symbol of the token - "kitty".

#### `decimals()`
```solidity
function decimals() public view returns (uint8);
```
Returns the number of decimals the token uses - by default, it's 18.

#### `tSupply()`
```solidity
uint256 public tSupply;
```
Returns the total supply of the token.

#### `transferProtection`
```solidity
bool public transferProtection;
```
Returns the current status of the transaction protection – `true` means that blocked addresses cannot transact.

#### `allowance(owner, spender)`
```solidity
function allowance(address owner, address spender) public view returns (uint256);
```
Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through `transferFrom`.

#### `balanceOf(account)`
```solidity
function balanceOf(address account) public view returns (uint256);
```
Returns the amount of tokens owned by `account`.

#### `balanceOfAt(account, snapshotId)`
```solidity
function balanceOfAt(address account, uint256 snapshotId) public view returns (uint256);
```
Provides the balance of the `account` at a specific `snapshotId`.

#### `isBlocked(account)`
```solidity
function isBlocked(address account) public view returns (bool);
```
Returns the blocked status of an `account`.

#### `name()`
```solidity
function name() public view returns (string memory);
```
Returns the name of the token.

#### `nonces(owner)`
```solidity
function nonces(address owner) public view returns (uint256);
```
Nonces of all holders. For each holder, the nonce increases whenever `permit` is called.

#### `owner()`
```solidity
function owner() public view returns (address);
```
Returns the current owner of the contract.

#### `paused()`
```solidity
function paused() public view returns (bool);
```
Returns true if the contract is paused, and false otherwise.

#### `symbol()`
```solidity
function symbol() public view returns (string memory);
```
Returns the symbol of the token.

#### `totalSupply()`
```solidity
function totalSupply() public view returns (uint256);
```
Returns the total amount of tokens in existence.

#### `totalSupplyAt(snapshotId)`
```solidity
function totalSupplyAt(uint256 snapshotId) public view returns (uint256);
```
Gets the total supply at the time of a specific snapshot via the snapshotId.

### 3. Write Functions

#### `approve(spender, amount)`
```solidity
function approve(address spender, uint256 amount) public returns (bool);
```
Sets `amount` as the allowance of spender over the caller’s tokens.

#### `burn(amount)`
```solidity
function burn(uint256 amount) public;
```
Destroys `amount` tokens from the caller.

#### `burnFrom(account, amount)`
```solidity
function burnFrom(address account, uint256 amount) public;
```
Destroys `amount` tokens from `account`, deducting from the caller's allowance.

#### `decreaseAllowance(spender, subtractedValue)`
```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool);
```
Decreases the allowance granted to `spender` by the caller.

#### `increaseAllowance(spender, addedValue)`
```solidity
function increaseAllowance(address spender, uint256 addedValue) public returns (bool);
```
Increases the allowance granted to `spender` by the caller.

#### `pause()`
```solidity
function pause() public onlyOwner;
```
Pauses all token transfers. Can only be called by the contract owner.

#### `permit(owner, spender, value, deadline, v, r, s)`
```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public;
```
Allows `spender` to spend `value` tokens from `owner`'s account. The `owner` must sign a message permitting this action.

#### `renounceOwnership()`
```solidity
function renounceOwnership() public onlyOwner;
```
Leaves the contract without an owner, disabling all functions with the `onlyOwner` modifier.

#### `setBlockedAddresses(account, blocked)`
```solidity
function setBlockedAddresses(address account, bool blocked) public onlyOwner;
```
Allows the contract owner to set an address as blocked or unblocked.

#### `setProtectionSettingsTransfer(transferProtect)`
```solidity
function setProtectionSettingsTransfer(bool transferProtect) external onlyOwner;
```
Allows the contract owner to enable or disable transaction protection.

#### `snapshot()`
```solidity
function snapshot() public onlyOwner;
```
Creates a new snapshot ID. Only callable by the contract owner.

#### `transfer(recipient, amount)`
```solidity
function transfer(address recipient, uint256 amount) public returns (bool);
```
Moves `amount` tokens from the caller to `recipient`.

#### `transferFrom(sender, recipient, amount)`
```solidity
function transferFrom(address sender, address recipient, uint256 amount) public returns (bool);
```
Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism.

#### `transferOwnership(newOwner)`
```solidity
function transferOwnership(address newOwner) public onlyOwner;
```
Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

#### `unpause()`
```solidity
function unpause() public onlyOwner;
```
Unpauses all token transfers. Can only be called by the contract owner.


### 4. Privileges

All write functions are available for the account owner except for: 

- `approve`
- `burn`
- `burnFrom`
- `decreaseAllowance`
- `increaseAllowance`
- `permit`
- `transfer`
- `transferFrom` 

which can be accessed by any address. 

#### Owner Privileges

- **`setBlockedAddresses` & `setProtectionSettingsTransfer`**
  - Used to control the contract's protection settings and change the blocked addresses list.


- **`snapshot`**
  - Used to create a snapshot of the current state of token balances. This can be used for governance or to provide historical data, as the `balanceOfAt` and `totalSupplyAt` functions provide data relative to these snapshots.

- **`pause` & `unpause`**
  - Can pause all token transfers when necessary. This can be especially useful in emergency situations.
  
- **`renounceOwnership`** 
  - Leaves the contract without an owner. It should be used with caution as it will prevent any further calls to owner-only functions, which include crucial administrative tasks.
  
- **`transferOwnership`** 
  - Allows the current owner to transfer control of the contract to a new owner. The new owner address must be non-zero and different from the current owner.

### 5. Exceptions
  - **`error blockedAddress()`**: An error that is thrown when a blocked address attempts to transfer tokens.

### 6. Notes

The contract includes additional functions inherited from the OpenZeppelin libraries, such as `_beforeTokenTransfer`. These functions are internal and not directly accessible, but are used within the contract to provide additional functionality and security.

All functions which modify the state of the contract are subject to the current pause status and the block status of the sender or receiver address.



















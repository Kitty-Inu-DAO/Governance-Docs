---
id: integration_guides
title: Integration Guides
tags:
  - integration
  - development
  - erc20
  - architecture
---

# Integration Guides

----------------------------------------------------------------------------

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


This section will provide you with guides on how to integrate the Kitty Inu token into your projects or platforms.

## Interacting with the Contract using Web3.js

`Web3.js` is a popular JavaScript library that allows you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.

Before you start, make sure you have Node.js installed in your system. If not, download and install it from [here](https://nodejs.org/en/download)

You can install `Web3.js` via `npm`:

```bash
npm install web3
```

Here's an example of how to interact with the Kitty Inu contract using `Web3.js`:

```js
const Web3 = require('web3');
// replace with your Infura project ID
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-INFURA-PROJECT-ID');

// replace with Kitty Inu's ABI
const kittyInuABI = [...];
// Kitty Inu's contract address
const kittyInuAddress = '0x61a35258107563f6b6f102ae25490901c8760b12';
const kittyInuContract = new web3.eth.Contract(kittyInuABI, kittyInuAddress);

// Get the total supply of Kitty Inu
kittyInuContract.methods.totalSupply().call()
  .then((totalSupply) => {
    console.log('Total supply of Kitty Inu is: ', totalSupply);
  })
  .catch((error) => {
    console.error('An error occurred: ', error);
  });
```

## Interacting with the Contract using Ethers.js

`Ethers.js` is a JavaScript library for interacting with the Ethereum Blockchain and its ecosystem.

You can install `Ethers.js` via `npm`:

```bash
npm install ethers
```

Here's an example of how to interact with the Kitty Inu contract using `Ethers.js`:

```js
const ethers = require('ethers');

// replace with your Infura project ID
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-INFURA-PROJECT-ID'); 

// replace with Kitty Inu's ABI
const kittyInuABI = [...];

// Kitty Inu's contract address
const kittyInuAddress = '0x61a35258107563f6b6f102ae25490901c8760b12';
const kittyInuContract = new ethers.Contract(kittyInuAddress, kittyInuABI, provider);

// Get the total supply of Kitty Inu
kittyInuContract.totalSupply()
  .then((totalSupply) => {
    console.log('Total supply of Kitty Inu is: ', totalSupply.toString());
  })
  .catch((error) => {
    console.error('An error occurred: ', error);
  });
```

Please replace 'https://mainnet.infura.io/v3/YOUR-INFURA-PROJECT-ID' with your own values.

## Interacting with the Contract using `Web3.py`

`Web3.py` is a Python library for interacting with Ethereum. It’s commonly used for creating decentralized applications (dApps) that interact with Ethereum smart contracts.

Before you start, make sure you have Python and pip installed in your system. If not, download and install it from [here](https://www.python.org/downloads/).

You can install `Web3.py` via pip:

```bash
pip install web3
```

Here's an example of how to interact with the Kitty Inu contract using `Web3.py`:

```python
from web3 import Web3

# replace with your Infura project ID
infura_url = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
web3 = Web3(Web3.HTTPProvider(infura_url))

# replace with Kitty Inu's ABI
kitty_inu_abi = [...]
# Kitty Inu's contract address
kitty_inu_address = '0x61a35258107563f6b6f102ae25490901c8760b12'
kitty_inu_contract = web3.eth.contract(address=kitty_inu_address, abi=kitty_inu_abi)

# Get the total supply of Kitty Inu
total_supply = kitty_inu_contract.functions.totalSupply().call()
print('Total supply of Kitty Inu is: ', total_supply)
```

## Getting the Contract ABI 


### Read the ABI From a Local JSON File

The contract ABI can be downloaded as a `json` file directly from etherscan [here](https://api.etherscan.io/api?module=contract&action=getabi&address=0x61a35258107563f6b6f102ae25490901c8760b12).

#### Python Implementation 

You can use the `json` module to read in the ABI:

```python
#Read the ABI from a local json file
import json
# replace 'path_to_abi.json' with your actual ABI file path
with open("path_to_abi.json", "r") as abi:
    kitty_inu_abi = json.load(abi)
```

#### Javascript Implementation

You can use the `fs` (File System) module in `Node.js` to read in the ABI:

```js
// Read the ABI from a local json file
const fs = require('fs');
// replace 'path_to_abi.json' with your actual ABI file path
let rawdata = fs.readFileSync('path_to_abi.json');
let kitty_inu_abi = JSON.parse(rawdata);
```

### Read the ABI From a URL

#### Python Implementation

In Python, you can use the `requests` library to make a GET request to the Etherscan API and fetch the ABI, then use the `web3` library to interact with the contract. Example: 

```python
import json
import requests
from web3 import Web3

# Connect to the network
web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))

# Get the ABI from the Etherscan API
response = requests.get('https://api.etherscan.io/api?module=contract&action=getabi&address=0x61a35258107563f6b6f102ae25490901c8760b12')

# Parse the result
kitty_inu_abi = json.loads(response.json()['result'])

# Set the contract address
contract_address = '0x61a35258107563f6b6f102ae25490901c8760b12' 

# Create a new contract instance
kitty_inu_contract = web3.eth.contract(address=contract_address, abi=kitty_inu_abi)

# Now you can interact with the contract
total_supply = kitty_inu_contract.functions.totalSupply().call()
print(total_supply)
```

#### Javascript Implementation

You can use the `axios` library in `Node.js` to make a GET request to that URL and fetch the ABI directly from Etherscan. Example:

```javascript
const Web3 = require('web3');
const axios = require('axios');

// Connect to the network
let web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Get the ABI from the Etherscan API
axios.get('https://api.etherscan.io/api?module=contract&action=getabi&address=0x61a35258107563f6b6f102ae25490901c8760b12')
    .then((response) => {
        // Parse the result
        let kitty_inu_abi = JSON.parse(response.data.result);

        // Set the contract address
        let contractAddress = '0x61a35258107563f6b6f102ae25490901c8760b12'; 

        // Create a new contract instance
        let kitty_inu_contract = new web3.eth.Contract(kitty_inu_abi, contractAddress);

        // Now you can interact with the contract
        kitty_inu_contract.methods.totalSupply().call((err, result) => {
            console.log(result);
        });
    })
    .catch((error) => {
        console.error(error);
    });
```



Remember, all transactions that alter the contract's state (like `setBlockedAddresses`) require gas and must be sent from an account with the required privileges.


The Kitty Inu token contract can be integrated into a wide variety of applications like wallets, exchanges, dapps, and more. Happy coding!







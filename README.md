# Blockchain-based Transaction Logging dApp using Solidity, Ethereum, and React

Welcome to the Blockchain-based Transaction Logging decentralized application (dApp) repository! This project demonstrates how to build a secure and transparent transaction logging system using Ethereum smart contracts, Solidity, and a React frontend.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Install Node.js and npm](#1-install-nodejs-and-npm)
  - [2. Install Ganache](#2-install-ganache)
  - [3. Setup Metamask](#3-setup-metamask)
  - [4. Deploy Smart Contract](#4-deploy-smart-contract)
  - [5. Run the React Application](#5-run-the-react-application)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This dApp enables users to log transactions on the Ethereum blockchain in a decentralized and tamper-proof manner. The backend smart contract is written in Solidity and deployed on a local Ethereum network using Ganache. The frontend is built with React and interacts with the smart contract via Web3.js.

---

## Features

- Secure transaction logging on the Ethereum blockchain
- User-friendly React interface
- Integration with Metamask for account management and transaction signing
- Local blockchain environment using Ganache for testing and development

---

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Metamask browser extension](https://metamask.io/)

---

## Setup Instructions

### 1. Install Node.js and npm

Download and install Node.js from the [official website](https://nodejs.org/). npm is included with Node.js.

Verify installation by running:

```bash
node -v
npm -v
```

### 2. Install Ganache

Ganache provides a personal Ethereum blockchain for development.

- Download Ganache from [here](https://trufflesuite.com/ganache/).
- Install and launch Ganache.
- Create a new workspace or quickstart a new Ethereum blockchain.
- Note the RPC server URL (usually `http://127.0.0.1:7545`).
(This Application uses port 8008 from Ganache)

### 3. Setup Metamask

Metamask is a browser extension wallet that allows interaction with Ethereum blockchain.

- Install Metamask from the [official website](https://metamask.io/).
- Create a new wallet or import an existing one.
- Connect Metamask to the local Ganache network:
  - Click on the network dropdown in Metamask.
  - Select "Add Network".
  - Fill in the following details:
    - Network Name: Ganache Local
    - New RPC URL: `http://127.0.0.1:8008`
    - Chain ID: 1337 (or as shown in Ganache)
    - Currency Symbol: ETH
    - Block Explorer URL: (leave blank)
  - Save the network.
- Import one of the Ganache accounts into Metamask using its private key:
  - In Ganache, copy the private key of an account.
  - In Metamask, click on the account icon > Import Account > paste the private key.

### 4. Deploy Smart Contract

- Make sure Ganache is running.
- Use Truffle or Hardhat to compile and deploy the smart contract to the Ganache network.
- Example using Truffle:

```bash
truffle compile
truffle migrate --network development
```

Ensure your `truffle-config.js` is configured to connect to Ganache.

### 5. Run the React Application

- Install dependencies:

```bash
npm install
```

- Start the React app:

```bash
npm start
```

- The app will open in your browser at `http://localhost:3000`.

---

## Usage

- Open the React app in your browser.
- Connect Metamask to the Ganache network.
- Use the interface to log transactions.
- View transaction logs stored on the blockchain.

---

## Troubleshooting

- **Metamask not connecting to Ganache?**
  - Ensure Ganache is running.
  - Verify RPC URL and Chain ID in Metamask network settings.
  - Restart Metamask or clear browser cache.

- **Smart contract deployment errors?**
  - Check Ganache logs.
  - Confirm Truffle configuration.
  - Ensure no other process is using the Ganache port.

- **React app issues?**
  - Verify dependencies are installed.
  - Check console for errors.
  - Restart the development server.

---

## License

This project is licensed under the MIT License.

---
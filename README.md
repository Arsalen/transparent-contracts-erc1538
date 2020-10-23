# EIP 1538 sample dapp
A reference implementation of [ERC1538](https://eips.ethereum.org/EIPS/eip-1538) on **ropsten** with migration scripts and a sample calling the `updateContract` function that adds the ***ERC721*** standard functions.

## Prerequisites

On a ubuntu server.
- Install truffle.
- Clone source.
- Setup a `.env` file with the following content in root directory.

```INI
PRIVATE_KEY=<PRIVATE_KEY>
INFURA_API_KEY=<INFURA_API_KEY>
ADDRESS=<ADDRESS>
```

## RUN

Run the the following commands.

```bash
user@host:~/transparent-contracts-erc1538$ npm i --save
user@host:~/transparent-contracts-erc1538$ truffle migrate --network ropsten
user@host:~/transparent-contracts-erc1538$ node tx.js # Sample calling the delegate contract
```
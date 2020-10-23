require('dotenv').config({path: '.env'});

const HDWalletProvider = require('truffle-hdwallet-provider');

const myTransparentContract = require('./build/contracts/MyTransparentContract');

const erc1538DelegateContract = require('./build/contracts/ERC1538Delegate');

const Web3 = require('web3');

const privateKey = process.env.PRIVATE_KEY.trim();

const infuraApiKey = process.env.INFURA_API_KEY.trim();

const address = process.env.ADDRESS.trim();

const provider = new HDWalletProvider([privateKey], `https://ropsten.infura.io/v3/${ infuraApiKey }`)

const web3 = new Web3(provider);

const myTransparentContractInstance = new web3.eth.Contract(myTransparentContract.abi, myTransparentContract.networks['3'].address);

const erc1538DelegateContractInstance = new web3.eth.Contract(erc1538DelegateContract.abi, erc1538DelegateContract.networks['3'].address);

const cryptoKitties = "0x06012c8cf97bead5deae237070f9587f8e7a266d"

const functionSignatures = "approve(address,uint256)balanceOf(address)getApproved(uint256)isApprovedForAll(address,address)ownerOf(uint256)safeTransferFrom(address,address,uint256)safeTransferFrom(address,address,uint256,bytes)setApprovalForAll(address,bool)transferFrom(address,address,uint256)";


const callData = erc1538DelegateContractInstance.methods.updateContract(cryptoKitties, functionSignatures, "Adding ERC721 functions").encodeABI();

const transactionObject = {
    to: myTransparentContractInstance.address,
    from: address,
    gas: 4500000,
    gasPrice: 10000000000,
    data: callData
};

var tx = () => {
    return web3.eth.sendTransaction(transactionObject)
};

tx()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
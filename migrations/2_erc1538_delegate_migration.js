var erc1538DelegateInstance = artifacts.require("./ERC1538Delegate.sol");

var myTransparentContract = artifacts.require("./MyTransparentContract.sol");

module.exports = function(deployer) {
  deployer.deploy(myTransparentContract, erc1538DelegateInstance.networks['3'].address);
};

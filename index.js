// NextGenweb3.js

// Import required modules
const Web3 = require('web3');

// Create a new Web3 instance
const web3 = new Web3('http://localhost:8545'); // Update with your desired provider

// Function to get the current Ethereum network ID
async function getNetworkId() {
  try {
    const networkId = await web3.eth.net.getId();
    console.log('Network ID:', networkId);
    return networkId;
  } catch (error) {
    console.error('Error getting network ID:', error);
    throw error;
  }
}

// Function to get the balance of an Ethereum account
async function getBalance(accountAddress) {
  try {
    const balance = await web3.eth.getBalance(accountAddress);
    console.log('Balance of', accountAddress, ':', web3.utils.fromWei(balance, 'ether'), 'ETH');
    return balance;
  } catch (error) {
    console.error('Error getting balance:', error);
    throw error;
  }
}

// Export functions
module.exports = {
  getNetworkId,
  getBalance
};

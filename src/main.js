const { Blockchain, Transaction } = require("./blockchain");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('052c2fb7f896d460a3fa465984f66032ee8421deee42a60819f368730dd495eb');
const myWallletAddress = myKey.getPublic('hex');


let sajeeCoin = new Blockchain();

const tx1 = new Transaction(myWallletAddress, "Public key goes here", 10);
tx1.signTransaction(myKey);
sajeeCoin.addTransaction(tx1)

console.log("\n Starting the miner ....");
sajeeCoin.miningPendingTransactions(myWallletAddress);
 
console.log("\nBalance of blessing is ", sajeeCoin.getBalanceOfAddress(myWallletAddress));

pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Transactions {
  struct Log {
    string message;
    uint timestamp;
    address sender;
  }

  Log[] public logs;

  event TransactionAdded(address indexed sender, string message, uint timestamp);

  function addTransaction(string memory _message) public {
    logs.push(Log(_message, block.timestamp, msg.sender));
    emit TransactionAdded(msg.sender, _message, block.timestamp);
  }

  function getAllTransactions() public view returns (Log[] memory) {
    return logs;
  }

  function getTransactionCount() public view returns (uint) {
    return logs.length;
  }
}
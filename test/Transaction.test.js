const Transactions = artifacts.require('./Transactions.sol')

contract('Transactions', (accounts) => {
  before(async () => {
    this.transactions = await Transactions.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.transactions.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('adds a transaction', async () => {
    const message = 'First transaction message'
    const result = await this.transactions.addTransaction(message, { from: accounts[0] })
    // Check event emission
    const event = result.logs[0].args
    assert.equal(event.sender, accounts[0])
    assert.equal(event.message, message)
    assert.ok(event.timestamp.toNumber() > 0)
    // Check transaction count
    const count = await this.transactions.getTransactionCount()
    assert.equal(count.toNumber(), 1)
  })

  it('retrieves all transactions', async () => {
    // Add another transaction for test
    const message2 = 'Second transaction'
    await this.transactions.addTransaction(message2, { from: accounts[1] })
    const allLogs = await this.transactions.getAllTransactions()
    assert.equal(allLogs.length, 2)
    assert.equal(allLogs[0].message, 'First transaction message')
    assert.equal(allLogs[0].sender, accounts[0])
    assert.equal(allLogs[1].message, message2)
    assert.equal(allLogs[1].sender, accounts[1])
  })
})
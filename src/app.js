App = {
  loading: false,
  contracts: {},

  load: async () => {
    await App.loadWeb3()
    await App.loadAccount()
    await App.loadContract()
    await App.render()
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  loadWeb3: async () => {
    if (window.ethereum) {
      App.web3Provider = window.ethereum
      window.web3 = new Web3(window.ethereum)
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        // Accounts now exposed
      } catch (error) {
        // User denied account access...
      }
    } else if (window.web3) {
      // Legacy dapp browsers...
      App.web3Provider = window.web3.currentProvider
      window.web3 = new Web3(window.web3.currentProvider)
      // Accounts always exposed
    } else {
      window.alert("Please connect to Metamask.")
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  loadAccount: async () => {
    // Set the current blockchain account
    const accounts = await web3.eth.getAccounts()
    App.account = accounts[0]
    console.log(App.account) // testing app loading
  },

  loadContract: async () => {
    // Load contract JSON
    const transactions = await $.getJSON('Transactions.json')
    console.log(transactions) //testing contract loading

    // Use Web3 to create contract instance
    const networkId = await web3.eth.net.getId()
    const deployedNetwork = transactions.networks[networkId]
    App.transactions = new web3.eth.Contract(
      transactions.abi,
      deployedNetwork && deployedNetwork.address,
    )
  },

  render: async () => {
    // Prevent double render
    if (App.loading) {
      return
    }

    // Update app loading state
    App.setLoading(true)

    // Render Account
    $('#account').html(App.account)

    // Render Transactions
    await App.renderTransactions()

    // Update loading state
    App.setLoading(false)
  },

  renderTransactions: async () => {
    // Load the total transaction count from the blockchain
    const transactionCount = await App.transactions.methods.getTransactionCount().call();
    console.log(transactionCount) // cheching transactions count in the blockchain
    const $transactionTemplate = $('.transactionTemplate')

    // Render out each transaction with a new transaction template
    for (var i = 1; i <= transactionCount; i++) {
        const transaction = await App.transactions.methods.logs(i - 1).call();
        const transactionDetails = transaction.message;
        const transactionTimestamp = transaction.timestamp;
        console.log(transaction)

      // Create the html for the transaction
      const $newTransactionTemplate = $transactionTemplate.clone()
      $newTransactionTemplate.find('.message').html(transactionDetails)
      $newTransactionTemplate.find('.timestamp').html(new Date(transactionTimestamp * 1000).toLocaleString())

      // Append the transaction to the list
      $('#transactionList').append($newTransactionTemplate)

      // Show the transaction
      $newTransactionTemplate.show()
    }
  },

  setLoading: (boolean) => {
    App.loading = boolean
    const loader = $('#loader')
    const content = $('#content')
    if (boolean) {
      loader.show()
      content.hide()
    } else {
      loader.hide()
      content.show()
    }
  }
}

$(() => {
  $(window).load(() => {
    App.load()

  })
})
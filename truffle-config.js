module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8008,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
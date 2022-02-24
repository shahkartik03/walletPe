require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://ropsten.infura.io/v3/b6efcae849304221b38e31fdf3238781',
      accounts: [
        '8f34782c304e6df696443eb8c7ebcacd8410f95ed0575e73e0e860bc304e1f9a',
      ],
    },
  },
}

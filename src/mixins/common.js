export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    //连接获得钱包地址
    async getAccounts() {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      return accounts
    },
    //连接web3 接口
    contractWebEth(abi, address) {
      const contractInstance = new web3.eth.Contract(abi, address)
      return contractInstance
    },
  },
  compute: {},
  watch: {},
}

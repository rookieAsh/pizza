<template>
  <!-- <el-container class="indexContainer"> -->
  <el-container>
    <div class="btn">
      <el-button @click="handleClick1">按钮1</el-button>
      <el-button @click="handleClick2">按钮2</el-button>
      <el-button @click="handleClick3">按钮3</el-button>
    </div>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      wallet: {},
      myContract: {},
      menulist: [
        { authName: '家', id: 'home', icon: 'el-icon-s-home' },
        { authName: '投票', id: 'vote', icon: 'el-icon-s-custom' },
        {
          authName: '贸易',
          id: 'trade',
          icon: 'el-icon-menu',
          children: [
            { authName: '兑换', id: 'trading', icon: 'el-icon-menu' },
            { authName: '流动性', id: 'liquidity', icon: 'el-icon-menu' },
          ],
        },
        { authName: '农场', id: 'farm', icon: 'el-icon-menu' },
        { authName: '城堡', id: 'castle', icon: 'el-icon-menu' },
      ],
    }
  },
  created() {
    this.instance()
  },
  methods: {
    // 初始化过程
    instance() {
      var Web3 = require('web3')
      console.log(Web3)
      if (typeof Web3 !== undefined) {
        web3 = new Web3(web3.currentProvider)
        console.log(web3)
      } else {
        web3 = new Web3(
          new Web3.providers.HttpProvider('http://localhost:8080')
        )
      }
    },
    async handleClick1() {
      const abi = [
        {
          constant: false,
          inputs: [
            {
              name: '_evilUser',
              type: 'address',
            },
          ],
          name: 'addBlackList',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_spender',
              type: 'address',
            },
            {
              name: '_value',
              type: 'uint256',
            },
          ],
          name: 'approve',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_upgradedAddress',
              type: 'address',
            },
          ],
          name: 'deprecate',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_blackListedUser',
              type: 'address',
            },
          ],
          name: 'destroyBlackFunds',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'issue',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [],
          name: 'pause',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'redeem',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_clearedUser',
              type: 'address',
            },
          ],
          name: 'removeBlackList',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: 'newBasisPoints',
              type: 'uint256',
            },
            {
              name: 'newMaxFee',
              type: 'uint256',
            },
          ],
          name: 'setParams',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_to',
              type: 'address',
            },
            {
              name: '_value',
              type: 'uint256',
            },
          ],
          name: 'transfer',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: '_from',
              type: 'address',
            },
            {
              name: '_to',
              type: 'address',
            },
            {
              name: '_value',
              type: 'uint256',
            },
          ],
          name: 'transferFrom',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              name: 'newOwner',
              type: 'address',
            },
          ],
          name: 'transferOwnership',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [],
          name: 'unpause',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              name: '_initialSupply',
              type: 'uint256',
            },
            {
              name: '_name',
              type: 'string',
            },
            {
              name: '_symbol',
              type: 'string',
            },
            {
              name: '_decimals',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'Issue',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'Redeem',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'newAddress',
              type: 'address',
            },
          ],
          name: 'Deprecate',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'feeBasisPoints',
              type: 'uint256',
            },
            {
              indexed: false,
              name: 'maxFee',
              type: 'uint256',
            },
          ],
          name: 'Params',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: '_blackListedUser',
              type: 'address',
            },
            {
              indexed: false,
              name: '_balance',
              type: 'uint256',
            },
          ],
          name: 'DestroyedBlackFunds',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: '_user',
              type: 'address',
            },
          ],
          name: 'AddedBlackList',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: '_user',
              type: 'address',
            },
          ],
          name: 'RemovedBlackList',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'owner',
              type: 'address',
            },
            {
              indexed: true,
              name: 'spender',
              type: 'address',
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256',
            },
          ],
          name: 'Approval',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'from',
              type: 'address',
            },
            {
              indexed: true,
              name: 'to',
              type: 'address',
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256',
            },
          ],
          name: 'Transfer',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [],
          name: 'Pause',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [],
          name: 'Unpause',
          type: 'event',
        },
        {
          constant: true,
          inputs: [],
          name: '_totalSupply',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: '_owner',
              type: 'address',
            },
            {
              name: '_spender',
              type: 'address',
            },
          ],
          name: 'allowance',
          outputs: [
            {
              name: 'remaining',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: '',
              type: 'address',
            },
            {
              name: '',
              type: 'address',
            },
          ],
          name: 'allowed',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: 'who',
              type: 'address',
            },
          ],
          name: 'balanceOf',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: '',
              type: 'address',
            },
          ],
          name: 'balances',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'basisPointsRate',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'deprecated',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: '_maker',
              type: 'address',
            },
          ],
          name: 'getBlackListStatus',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getOwner',
          outputs: [
            {
              name: '',
              type: 'address',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            {
              name: '',
              type: 'address',
            },
          ],
          name: 'isBlackListed',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'MAX_UINT',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'maximumFee',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'owner',
          outputs: [
            {
              name: '',
              type: 'address',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'paused',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'totalSupply',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'upgradedAddress',
          outputs: [
            {
              name: '',
              type: 'address',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ]
      const address = '0xEc3Cb067AcC51A5245f063313b4348aEEF0b0f34'
      const contractInstance = new web3.eth.Contract(abi, address)
      console.log('contractInstance', contractInstance)
      // 查看账户余额 call()不用加data send()需要加data
      contractInstance.methods
        .balanceOf('0x229feadD188f7A408Bad6312343deC87eFc527B5')
        .call((err, res) => {
          console.log('返回值[result]:', res)
        })

      // 转账
      var data = {
        from: '0x229feadD188f7A408Bad6312343deC87eFc527B5',
        value: 0x0,
        data: '0x0',
      }
      contractInstance.methods
        .transfer('0xeFd329D6DCb9d15dA35e84d2B560E68EC01005Cc', 10 * 1000000)
        .send(data, (error, res) => {
          if (!error) {
            console.log('返回值[result]:', res)
          }
        })
      // 查看钱包地址
      const myAddress = await web3.eth.getCoinbase()
      console.log('钱包地址：', myAddress)
    },
    handleClick2() {
      this.wallet = web3.eth.accounts.wallet
      console.log(this.wallet.defaultKeyName)
      web3.eth.getProtocolVersion().then((res) => {
        console.log(res)
      })
    },
    handleClick3() {},
  },
}
</script>
<style scoped></style>

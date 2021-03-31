import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: '',
    addressAll: '',
    abi: [
      {
        inputs: [
          { internalType: 'contract IERC20', name: '_piz', type: 'address' },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'uint256', name: '_rewardRate', type: 'uint256' },
          {
            internalType: 'contract IERC20',
            name: '_lpToken',
            type: 'address',
          },
        ],
        name: 'add',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'claimOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'pid', type: 'uint256' },
        ],
        name: 'earned',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [{ internalType: 'uint256', name: 'pid', type: 'uint256' }],
        name: 'exit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'finsishtime',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { internalType: 'address', name: 'uaddress', type: 'address' },
        ],
        name: 'isUserExists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'pendingOwner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'periodFinish',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'piz',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'poolInfo',
        outputs: [
          { internalType: 'contract IERC20', name: 'lpToken', type: 'address' },
          { internalType: 'uint256', name: 'rewardRate', type: 'uint256' },
          { internalType: 'uint256', name: 'updateTime', type: 'uint256' },
          { internalType: 'uint256', name: 'perTokenStored', type: 'uint256' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'poolLength',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [{ internalType: 'uint256', name: 'pid', type: 'uint256' }],
        name: 'reap',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'address', name: 'raddress', type: 'address' },
        ],
        name: 'register',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ internalType: 'uint256', name: 'pid', type: 'uint256' }],
        name: 'rewardPerToken',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'uint256', name: '_pid', type: 'uint256' },
          { internalType: 'uint256', name: '_rewardRate', type: 'uint256' },
        ],
        name: 'set',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'pid', type: 'uint256' },
        ],
        name: 'stake',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { internalType: 'uint256', name: '', type: 'uint256' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'stakeInfos',
        outputs: [
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'yieldRate', type: 'uint256' },
          { internalType: 'uint256', name: 'reward', type: 'uint256' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
          { internalType: 'bool', name: 'direct', type: 'bool' },
          { internalType: 'bool', name: 'renounce', type: 'bool' },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'uids',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'userCounter',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'users',
        outputs: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'uint256', name: 'teamMass', type: 'uint256' },
          { internalType: 'uint256', name: 'referrals', type: 'uint256' },
          { internalType: 'uint256', name: 'teamMax', type: 'uint256' },
          { internalType: 'uint256', name: 'partners', type: 'uint256' },
          { internalType: 'address', name: 'referer', type: 'address' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'pid', type: 'uint256' },
        ],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  mutations: {
    getAddress(state, newAccounts) {
      state.address = newAccounts[0]
    },
    instance() {
      // 初始化过程
      var Web3 = require('web3')
      console.log(Web3)
      if (typeof Web3 !== undefined) {
        web3 = new Web3(web3.currentProvider)
        console.log(web3)
      } else {
        web3 = new Web3(
          new Web3.providers.HttpProvider(
            'https://data-seed-prebsc-1-s1.binance.org:8545/'
          )
        )
      }
    },
  },
  actions: {
    // async hendleWallet() {
    //   if (typeof window.ethereum !== 'undefined') {
    //     console.log('MetaMask is installed!')
    //   }
    //   const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    //   console.log(accounts)
    //   this.addressAll = accounts[0]
    //   this.address = accounts[0].slice(0, 8) + '...'
    // },
  },
  modules: {},
})

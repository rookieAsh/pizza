<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <div class="titleMsg">农场</div>
        <p class="titleNav">筹集流动资金池（LP）代币以赚取收益</p>
      </div>
      <div class="mainContent" v-if="flag">
        <div class="submenu">
          <div class="img1">
            <img src="../assets/image/farm/img4.png" alt="" />
          </div>
          <div class="tab">PIZ 质押挖矿</div>
          <div class="msg">
            <div>存入PIZ</div>
            <div>获取PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig(0)">选择</button>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img1.png" alt="" />
          </div>
          <div class="tab">USDT-PIZ/LP 质押挖矿</div>
          <div class="msg">
            <div>存入PIZ</div>
            <div>获取PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig1(1)">选择</button>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img3.png" alt="" />
          </div>
          <div class="tab">BNB-PIZ/LP 质押挖矿</div>
          <div class="msg">
            <div>存入PIZ</div>
            <div>获取PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig2(2)">选择</button>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img2.png" alt="" />
          </div>
          <div class="tab">BNB-PIZ/LP 质押挖矿</div>
          <div class="msg">
            <div>存入PIZ</div>
            <div>获取PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig3(3)">选择</button>
          </div>
        </div>
      </div>
      <div class="registerBtn" v-if="!flag">
        <div class="register" @click="handleRegister">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import fun from '../mixins/common.js'

export default {
  mixins: [fun],
  data() {
    return {
      inviter: '',
      flag: false,
      state: '',
      dialogVisible: false,
      address: this.$store.state.adsCastle, //城堡合约
      abi: this.$store.state.abiCastle, // 城堡合约地址abi
      raddress: '', //推荐人地址
      addressAll: '', //钱包地址
    }
  },
  created() {
    this.$store.commit('instance')
    this.getStatsMsg()
    this.hendleWalletBtn()
  },
  mounted() {
    this.inviter = location.hash.slice(7)
    if (this.inviter != '') {
      window.sessionStorage.setItem('setinviter', this.inviter)
    }
  },
  methods: {
    handlePizdig(pid) {
      // this.$router.push({path: ' 路由 ', query: {key: value}})
      // this.$router.push('/pizdig')
      this.$router.push({ path: 'pizdig', query: { key: pid } })
    },
    handlePizdig1(pid) {
      this.$router.push({ path: 'pizdig1', query: { key: pid } })
    },
    handlePizdig2(pid) {
      this.$router.push({ path: 'pizdig2', query: { key: pid } })
    },
    handlePizdig3(pid) {
      this.$router.push({ path: 'pizdig3', query: { key: pid } })
    },
    async instances() {
      const abi = [
        {
          entrys: [
            {
              inputs: [{ name: '_pipe', type: 'address' }],
              stateMutability: 'Nonpayable',
              type: 'Constructor',
            },
            {
              inputs: [
                { indexed: true, name: 'previousOwner', type: 'address' },
                { indexed: true, name: 'newOwner', type: 'address' },
              ],
              name: 'OwnershipTransferred',
              type: 'Event',
            },
            {
              inputs: [
                { name: '_rewardRate', type: 'uint256' },
                { name: '_lpToken', type: 'address' },
              ],
              name: 'add',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              name: 'claimOwnership',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              inputs: [
                { name: 'account', type: 'address' },
                { name: 'pid', type: 'uint256' },
              ],
              name: 'earned',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              inputs: [{ name: 'pid', type: 'uint256' }],
              name: 'exit',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              name: 'finsishtime',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'bool' }],
              constant: true,
              inputs: [{ name: 'uaddress', type: 'address' }],
              name: 'isUserExists',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'address' }],
              constant: true,
              name: 'owner',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'address' }],
              constant: true,
              name: 'pendingOwner',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              name: 'periodFinish',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'address' }],
              constant: true,
              name: 'pipe',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [
                { name: 'lpToken', type: 'address' },
                { name: 'rewardRate', type: 'uint256' },
                { name: 'updateTime', type: 'uint256' },
                { name: 'perTokenStored', type: 'uint256' },
              ],
              constant: true,
              inputs: [{ type: 'uint256' }],
              name: 'poolInfo',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              name: 'poolLength',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              inputs: [{ name: 'pid', type: 'uint256' }],
              name: 'reap',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              inputs: [{ name: 'raddress', type: 'address' }],
              name: 'register',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              inputs: [{ name: 'pid', type: 'uint256' }],
              name: 'rewardPerToken',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              inputs: [
                { name: '_pid', type: 'uint256' },
                { name: '_rewardRate', type: 'uint256' },
              ],
              name: 'set',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              inputs: [
                { name: 'amount', type: 'uint256' },
                { name: 'pid', type: 'uint256' },
              ],
              name: 'stake',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              outputs: [
                { name: 'amount', type: 'uint256' },
                { name: 'yieldRate', type: 'uint256' },
                { name: 'reward', type: 'uint256' },
              ],
              constant: true,
              inputs: [{ type: 'uint256' }, { type: 'address' }],
              name: 'stakeInfos',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              inputs: [
                { name: 'newOwner', type: 'address' },
                { name: 'direct', type: 'bool' },
                { name: 'renounce', type: 'bool' },
              ],
              name: 'transferOwnership',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
            {
              outputs: [{ type: 'address' }],
              constant: true,
              inputs: [{ type: 'uint256' }],
              name: 'uids',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [{ type: 'uint256' }],
              constant: true,
              name: 'userCounter',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              outputs: [
                { name: 'id', type: 'uint256' },
                { name: 'teamMass', type: 'uint256' },
                { name: 'referrals', type: 'uint256' },
                { name: 'teamMax', type: 'uint256' },
                { name: 'partners', type: 'uint256' },
                { name: 'referer', type: 'address' },
              ],
              constant: true,
              inputs: [{ type: 'address' }],
              name: 'users',
              stateMutability: 'View',
              type: 'Function',
            },
            {
              inputs: [
                { name: 'amount', type: 'uint256' },
                { name: 'pid', type: 'uint256' },
              ],
              name: 'withdraw',
              stateMutability: 'Nonpayable',
              type: 'Function',
            },
          ],
        },
      ]
      const contract = web3.eth.contract(abi)
      this.myContract = contract.at(
        '0x8F5715B7e6F00282a49e309D0fFf27DcdE4c6ca0'
      )
    },
    async getStatsMsg() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      contractInstance.methods
        .getStats(newAccounts)
        .call()
        .then((res) => {
          console.log(res.stats)
          this.raddress = res.referer
          this.state = res.stats[0]
          console.log('this.state', this.state)
          if (this.state != 0) {
            this.flag = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //  获得钱包地址
    async hendleWalletBtn() {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!')
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      console.log(accounts)
      this.addressAll = accounts[0]
    },

    // 注册
    async handleRegister() {
      this.inviter = window.sessionStorage.getItem('setinviter')
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .register(this.inviter)
        .send({ from: newAccounts })
        .then((res) => {
          this.$message.success('注册成功')
          console.log(res)
        })
        .catch((err) => {
          console.log('errerr', err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .content {
    margin: auto;
    .title {
      // margin-top: 49px;
      text-align: center;
      .titleMsg {
        font-size: 36px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #333333;
        margin-top: 49px;
      }
      .titleNav {
        font-size: 24px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #666666;
        margin: 10px 0 40px 0;
      }
    }
    .mainContent {
      width: 800px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .submenu {
        width: 380px;
        height: 316px;
        margin: 0 20px 20px 0;
        text-align: center;
        border-radius: 20px;
        background-color: #fff;
        padding: 36px 0;
        box-shadow: 0px 0px 42px 2px rgba(180, 180, 180, 0.16);
        .img {
          width: 174px;
          height: 104px;
          margin: auto;
        }
        .img1 {
          width: 104px;
          height: 104px;
          margin: auto;
        }
        .tab {
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          margin: 26px 0 12px 0;
          color: #000000;
        }
        .msg {
          margin: 0 0 34px 0;
          font-size: 18px;
          font-family: PingFang-SC-Regular, PingFang-SC;
          font-weight: 400;
          color: #666666;
        }
      }
      button {
        width: 195px;
        height: 58px;
        background: #1ec7d5;
        border-radius: 29px;
        outline: none;
        border: 0;
        cursor: pointer;
        font-size: 20px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .registerBtn {
      width: 496px;
      height: 58px;
      line-height: 58px;
      background: #1ec7d5;
      border-radius: 29px;
      text-align: center;
      margin: auto;
      .register {
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .diaContent {
      width: 100%;
      .title1 {
        text-align: center;
        font-size: 24px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #4c4c4c;
      }
      .title2 {
        text-align: center;
        font-size: 18px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #000000;
        margin: 12px 0 30px 0;
      }
      .title3 {
        float: right;
        font-size: 18px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #1ec7d5;
        text-decoration: underline;
        margin: 16px 0 30px 0;
      }
      .inputMag {
        display: flex;
        flex-direction: row;
        .pizmsg {
          width: 154px;
          height: 80px;
          margin-right: 20px;
          line-height: 80px;
          background: #fef5c8;
          border-radius: 20px;
          text-align: center;
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #1d1d1d;
        }
        .pizInput {
          width: 370px;
          height: 77px;
          padding-left: 25px;
          font-size: 18px;
          border-radius: 20px;
          font-family: PingFang-SC-Regular, PingFang-SC;
          font-weight: 400;
          color: #393939;
          background-color: #fef5c8;
          line-height: 77px;
          border: none;
          outline: none;
        }
      }
      .buttonBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .confimBtn {
          width: 520px;
          height: 60px;
          margin: 40px 0 20px 0;
          background: #ffffff;
          border-radius: 12px;
          font-size: 24px;
          border: none;
          color: #000;
          outline: none;
          cursor: pointer;
        }
        .cancelBtn {
          width: 520px;
          height: 60px;
          font-size: 24px;
          background: #ffffff;
          border-radius: 12px;
          color: #000;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .cancelBtn:hover {
          background: #1ec7d5;
          color: #fff;
        }
        .confimBtn:hover {
          background: #1ec7d5;
          color: #fff;
        }
      }
    }
  }
}
// }

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
    .content {
      width: 100%;
      .title {
        .titleMsg {
          font-size: 18px;
          margin-top: 40px;
        }
        .titleNav {
          font-size: 12px;
          margin: 10px 0 20px 0;
        }
      }
      .mainContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .submenu {
          margin: 0 0 20px 0;
          // margin: auto;
          width: 216px;
          height: 223px;
          padding: 25px;

          .img1 {
            width: 73px;
            height: 73px;
            img {
              width: 73px;
              height: 73px;
            }
          }
          .img {
            width: 122px;
            height: 73px;
            img {
              width: 122px;
              height: 73px;
            }
          }
          .tab {
            font-size: 17px;
            margin: 18px 0 8px 0;
          }
          .msg {
            margin-bottom: 23px;
            font-size: 12px;
          }
          button {
            width: 137px;
            height: 40px;
            font-size: 14px;
          }
        }
      }
      .registerBtn {
        width: 238px;
        height: 28px;
        line-height: 28px;
        background: #1ec7d5;
        border-radius: 19px;
        text-align: center;
        margin: auto;
        .register {
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
          cursor: pointer;
        }
      }
      .diaContent {
        .title1 {
          font-size: 16px;
          width: 270px;
          text-align: center;
          margin: 0 0 0 0;
        }
        .title2 {
          font-size: 11px;
          width: 270px;
          text-align: center;
          margin: 3px 0 14px 0;
        }
        .title3 {
          font-size: 11px;
          margin: 6px 0 15px 0;
        }
        .inputMag {
          .pizmsg {
            width: 80px;
            height: 39px;
            line-height: 38px;
            font-size: 12px;
            border-radius: 0px;
          }
          .pizInput {
            width: 180px;
            height: 37px;
            padding-left: 15px;
            line-height: 37px;
            font-size: 12px;
            border-radius: 0px;
          }
        }
        .buttonBox {
          width: 250px;
          .confimBtn {
            width: 250px;
            height: 30px;
            background: #1ec7d5;
            border-radius: 6px;
            font-size: 12px;
            margin: 20px 0 6px 0;
          }
          .cancelBtn {
            width: 250px;
            height: 30px;
            background: #1ec7d5;
            border-radius: 6px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
// }
</style>

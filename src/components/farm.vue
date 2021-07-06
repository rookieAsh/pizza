<template>
  <div class="container">
    <div class="content">
      <!-- <el-button @click="handleHome" type="primary">我首页</el-button> -->
      <div class="title">
        <div class="titleMsg">{{ $t('lang.farm') }}</div>
        <p class="titleNav">
          {{ $t('lang.raise') }}（LP）{{ $t('lang.earnProfit') }}
        </p>
      </div>
      <div class="mainContent" v-if="flag">
        <div class="submenu">
          <div class="img1">
            <img src="../assets/image/farm/img4.png" alt="" />
          </div>
          <div class="tab">PIZ {{ $t('lang.pledgeToDig') }}</div>
          <div class="msg">
            <div>{{ $t('lang.deposit') }}PIZ</div>
            <div>{{ $t('lang.obtain') }}PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig(0)">{{ $t('lang.choose') }}</button>
          </div>
          <div class="footer">
            <div class="div1">
              {{ $t('lang.annualInterestRate') }}：{{ annualInterestRate0 }}
            </div>
            <div class="div2">{{ $t('lang.dailyProduction') }}：35000 PIZ</div>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img1.png" alt="" />
          </div>
          <div class="tab">USDT-PIZ/LP {{ $t('lang.pledgeToDig') }}</div>
          <div class="msg">
            <div>{{ $t('lang.deposit') }}USDT-PIZ</div>
            <div>{{ $t('lang.obtain') }}PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig1(1)">{{ $t('lang.choose') }}</button>
          </div>
          <div class="footer">
            <div class="div1">
              {{ $t('lang.annualInterestRate') }}：{{ annualInterestRate1 }}
            </div>
            <div class="div2">{{ $t('lang.dailyProduction') }}：35000 PIZ</div>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img3.png" alt="" />
          </div>
          <div class="tab">BUSD-PIZ/LP {{ $t('lang.pledgeToDig') }}</div>
          <div class="msg">
            <div>{{ $t('lang.deposit') }}BUSD-PIZ</div>
            <div>{{ $t('lang.obtain') }}PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig2(2)">{{ $t('lang.choose') }}</button>
          </div>
          <div class="footer">
            <div class="div1">
              {{ $t('lang.annualInterestRate') }}：{{ annualInterestRate2 }}
            </div>
            <div class="div2">{{ $t('lang.dailyProduction') }}：35000 PIZ</div>
          </div>
        </div>
        <div class="submenu">
          <div class="img">
            <img src="../assets/image/farm/img2.png" alt="" />
          </div>
          <div class="tab">BNB-PIZ/LP {{ $t('lang.pledgeToDig') }}</div>
          <div class="msg">
            <div>{{ $t('lang.deposit') }}BNB-PIZ</div>
            <div>{{ $t('lang.obtain') }}PIZ</div>
          </div>
          <div>
            <button @click="handlePizdig3(3)">{{ $t('lang.choose') }}</button>
          </div>
          <div class="footer">
            <div class="div1">
              {{ $t('lang.annualInterestRate') }}：{{ annualInterestRate3 }}
            </div>
            <div class="div2">{{ $t('lang.dailyProduction') }}：35000 PIZ</div>
          </div>
        </div>
      </div>
      <div class="registerBtn" v-if="!flag">
        <div class="register" @click="handleRegister">
          {{ $t('lang.registered') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fun from '../mixins/common.js'
import { BigNumber } from 'bignumber.js'

export default {
  mixins: [fun],
  data() {
    return {
      inviter: '',
      flag: false,
      state: '',
      dialogVisible: false,
      pizAddress: this.$store.state.pizTest, //piz地址
      pizAbi: this.$store.state.abiTest, //测试地址abi
      address: this.$store.state.adsCastle, //城堡合约
      abi: this.$store.state.abiCastle, // 城堡合约地址abi
      addressFarm: this.$store.state.adsFarm, //农场合约地址
      abiFarm: this.$store.state.abiFarm, //农场合约合约地址abi
      abiTest: this.$store.state.abiTest, //测试地址abi
      raddress: '', //推荐人地址
      addressAll: '', //钱包地址
      addressLpToken0: '', //池子地址
      balance0: '', //余额
      balanceToPiz0: '', //余额转piz
      annualInterestRate0: '', //年化利率
      addressLpToken1: '',
      balance1: '',
      balanceToPiz1: '',
      annualInterestRate1: '',
      addressLpToken2: '',
      balance2: '',
      balanceToPiz2: '',
      annualInterestRate2: '',
      addressLpToken3: '',
      balance3: '',
      balanceToPiz3: '',
      annualInterestRate3: '',
      precisionPiz: '', //piz精度
    }
  },
  created() {
    this.$store.commit('instance')
    this.getStatsMsg()
    this.hendleWalletBtn()
    this.getAnnualInterestRate0()
    this.getAnnualInterestRate1()
    this.getAnnualInterestRate2()
    this.getAnnualInterestRate3()
  },
  mounted() {
    this.getStatsMsg()
    this.inviter = location.hash.slice(7)
    if (this.inviter != '') {
      window.sessionStorage.setItem('setinviter', this.inviter)
    }
  },
  methods: {
    handleHome() {
      this.$router.push('./home')
    },
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
          this.state = res.usdtstats[0]
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
          this.$message.success(this.$t('lang.RegisteredSuc'))
          this.$router.push('/home')
        })
        .catch((err) => {
          console.log('errerr', err)
        })
    },
    // 获得年利率：
    // 先获得池子地址LpToken
    // 然后得到代币余额 转piz
    // 最后计算得年化利率  == 年产值/投入
    async getAnnualInterestRate0() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(
        this.abiFarm,
        this.addressFarm
      )
      await contractInstance.methods
        .poolInfo('0')
        .call()
        .then((res) => {
          this.addressLpToken0 = res.lpToken
          this.balance0 = res.totalAmount
        })
      const contractInstanceCastle = this.contractWebEth(this.abi, this.address)
      await contractInstanceCastle.methods
        .getAmount(this.balance0, this.addressLpToken0)
        .call()
        .then((res) => {
          this.balanceToPiz0 = res
        })
      const contractInstancePiz = this.contractWebEth(
        this.pizAbi,
        this.pizAddress
      )
      await contractInstancePiz.methods
        .decimals()
        .call()
        .then((res) => {
          this.precisionPiz = res
        })
      // this.annualInterestRate0 = 35000 * 365 * Math.pow(10, this.precisionPiz)
      // this.annualInterestRate0 =
      //   Math.floor(this.annualInterestRate0 * 100) / 100 + '%'
      // 年产值/投入
      if (this.balanceToPiz0 == 0) {
        this.annualInterestRate0 = ' ∞ '
      } else {
        const annual = BigNumber(35000 * 365 * Math.pow(10, this.precisionPiz))
        await contractInstanceCastle.methods
          .getAmount(web3.utils.numberToHex(annual), this.addressLpToken0)
          .call()
          .then((res) => {
            this.annualInterestRate0 = (res * 100) / this.balanceToPiz0
            this.annualInterestRate0 =
              Math.floor(this.annualInterestRate0 * 100) / 100 + '%'
          })
      }
    },

    async getAnnualInterestRate1() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(
        this.abiFarm,
        this.addressFarm
      )
      await contractInstance.methods
        .poolInfo('1')
        .call()
        .then((res) => {
          this.addressLpToken1 = res.lpToken
        })
      const contractInstances = this.contractWebEth(
        this.abiTest,
        this.addressLpToken1
      )
      await contractInstances.methods
        .balanceOf(this.addressFarm)
        .call()
        .then((res) => {
          this.balance1 = res
        })
      const contractInstanceCastle = this.contractWebEth(this.abi, this.address)
      await contractInstanceCastle.methods
        .getAmount(this.balance1, this.addressLpToken1)
        .call()
        .then((res) => {
          this.balanceToPiz1 = res
        })
      const contractInstancePiz = this.contractWebEth(
        this.pizAbi,
        this.pizAddress
      )
      await contractInstancePiz.methods
        .decimals()
        .call()
        .then((res) => {
          this.precisionPiz = res
        })
      if (this.balanceToPiz1 == 0) {
        this.annualInterestRate1 = ' ∞ '
      } else {
        const annual = BigNumber(35000 * 365 * Math.pow(10, this.precisionPiz))
        await contractInstanceCastle.methods
          .getAmount(web3.utils.numberToHex(annual), this.addressLpToken1)
          .call()
          .then((res) => {
            this.annualInterestRate1 = (res * 100) / this.balanceToPiz1
            this.annualInterestRate1 =
              Math.floor(this.annualInterestRate1 * 100) / 100 + '%'
            // this.annualInterestRate1.toFixed(2) + '%'
          })
      }
    },

    async getAnnualInterestRate2() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(
        this.abiFarm,
        this.addressFarm
      )
      await contractInstance.methods
        .poolInfo('2')
        .call()
        .then((res) => {
          this.addressLpToken2 = res.lpToken
        })
      const contractInstances = this.contractWebEth(
        this.abiTest,
        this.addressLpToken2
      )
      await contractInstances.methods
        .balanceOf(this.addressFarm)
        .call()
        .then((res) => {
          this.balance2 = res
        })
      const contractInstanceCastle = this.contractWebEth(this.abi, this.address)
      await contractInstanceCastle.methods
        .getAmount(this.balance2, this.addressLpToken2)
        .call()
        .then((res) => {
          this.balanceToPiz2 = res
        })
      // if (this.balanceToPiz2 == 0) {
      //   this.annualInterestRate2 = ' ∞ '
      // } else {
      const contractInstancePiz = this.contractWebEth(
        this.pizAbi,
        this.pizAddress
      )
      await contractInstancePiz.methods
        .decimals()
        .call()
        .then((res) => {
          this.precisionPiz = res
        })
      //   this.annualInterestRate2 =
      //     (35000 * 365 * 100 * Math.pow(10, this.precisionPiz)) /
      //     this.balanceToPiz2
      //   this.annualInterestRate2 =
      //     Math.floor(this.annualInterestRate2 * 100) / 100 + '%'
      // }

      if (this.balanceToPiz2 == 0) {
        this.annualInterestRate2 = ' ∞ '
      } else {
        const annual = BigNumber(35000 * 365 * Math.pow(10, this.precisionPiz))
        await contractInstanceCastle.methods
          .getAmount(web3.utils.numberToHex(annual), this.addressLpToken2)
          .call()
          .then((res) => {
            this.annualInterestRate2 = (res * 100) / this.balanceToPiz2
            this.annualInterestRate2 =
              Math.floor(this.annualInterestRate2 * 100) / 100 + '%'
          })
      }
    },

    async getAnnualInterestRate3() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(
        this.abiFarm,
        this.addressFarm
      )
      await contractInstance.methods
        .poolInfo('3')
        .call()
        .then((res) => {
          this.addressLpToken3 = res.lpToken
        })
      const contractInstances = this.contractWebEth(
        this.abiTest,
        this.addressLpToken3
      )
      await contractInstances.methods
        .balanceOf(this.addressFarm)
        .call()
        .then((res) => {
          this.balance3 = res
        })
      const contractInstanceCastle = this.contractWebEth(this.abi, this.address)
      await contractInstanceCastle.methods
        .getAmount(this.balance3, this.addressLpToken3)
        .call()
        .then((res) => {
          this.balanceToPiz3 = res
        })
      const contractInstancePiz = this.contractWebEth(
        this.pizAbi,
        this.pizAddress
      )
      await contractInstancePiz.methods
        .decimals()
        .call()
        .then((res) => {
          this.precisionPiz = res
        })
      // this.annualInterestRate3 =
      //   (35000 * 365 * 100 * Math.pow(10, this.precisionPiz)) /
      //   this.balanceToPiz3
      // this.annualInterestRate3 =
      //   Math.floor(this.annualInterestRate3 * 100) / 100 + '%'
      if (this.balanceToPiz3 == 0) {
        this.annualInterestRate3 = ' ∞ '
      } else {
        const annual = BigNumber(35000 * 365 * Math.pow(10, this.precisionPiz))
        await contractInstanceCastle.methods
          .getAmount(web3.utils.numberToHex(annual), this.addressLpToken3)
          .call()
          .then((res) => {
            this.annualInterestRate3 = (res * 100) / this.balanceToPiz3
            this.annualInterestRate3 =
              Math.floor(this.annualInterestRate3 * 100) / 100 + '%'
          })
      }
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
        height: 400px;
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
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .msg {
          margin: 0 0 34px 0;
          font-size: 18px;
          font-family: PingFang-SC-Regular, PingFang-SC;
          font-weight: 400;
          color: #666666;
        }
        .footer {
          margin: 30px 0 0 0;
          font-size: 18px;
          color: #666666;
          .div1 {
            height: 30px;
            line-height: 30px;
          }
          .div2 {
            height: 30px;
            line-height: 30px;
          }
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
          height: 256px;
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
          .footer {
            margin: 16px 0 0 0;
            font-size: 12px;
            color: #666666;
            .div1 {
              height: 16px;
              line-height: 16px;
            }
            .div2 {
              height: 16px;
              line-height: 16px;
            }
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

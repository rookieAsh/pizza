<template>
  <div class="container">
    <div class="titleMsg">{{ $t('lang.castle') }}</div>
    <div class="titleNav">{{ $t('lang.dailyProduction') }} 160000 PIZ</div>
    <div class="content">
      <div class="left">
        <div class="leftImg">
          <img v-if="level == 0" src="../assets/image/castle/img0.png" alt="" />
          <img v-if="level == 1" src="../assets/image/castle/img1.png" alt="" />
          <img v-if="level == 2" src="../assets/image/castle/img2.png" alt="" />
          <img v-if="level == 3" src="../assets/image/castle/img3.png" alt="" />
          <img v-if="level == 4" src="../assets/image/castle/img4.png" alt="" />
          <img v-if="level == 5" src="../assets/image/castle/img5.png" alt="" />
          <img v-if="level == 6" src="../assets/image/castle/img6.png" alt="" />
          <img v-if="level == 7" src="../assets/image/castle/img7.png" alt="" />
        </div>
        <div class="leftLevel">
          <div v-if="level == 0" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.no') }}
          </div>
          <div v-if="level == 1" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.soldiers') }}
          </div>
          <div v-if="level == 2" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.knight') }}
          </div>
          <div v-if="level == 3" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.fortress') }}
          </div>
          <div v-if="level == 4" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.duke') }}
          </div>
          <div v-if="level == 5" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.general') }}
          </div>
          <div v-if="level == 6" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.king') }}
          </div>
          <div v-if="level == 7" class="leftLevel1">
            {{ $t('lang.grades') }}：{{ $t('lang.queen') }}
          </div>
          <div class="fontStyle">
            <div class="fontLength">{{ $t('lang.pledgePerformance') }}</div>
            <div>：{{ state0 }} U</div>
          </div>
          <!-- <div>分节总质押市值：{{ state2 }} U</div> -->
          <div class="fontStyle">
            <div class="fontLength">{{ $t('lang.personalPledge') }}</div>
            <div>：{{ state1 }} U</div>
          </div>
          <div class="fontStyle">
            <div class="fontLength">{{ $t('lang.upgrade') }}</div>
            <div>：{{ state2 }} U</div>
          </div>
        </div>
        <button @click="handlePledge()">{{ $t('lang.pledge') }}</button>
      </div>
      <div class="right">
        <div class="rightTitle">{{ $t('lang.pledgePerformance') }}</div>
        <div class="fontStyle">
          <div class="fontLength">{{ $t('lang.pledgePerformance') }}</div>
          <div>：{{ state3 }} PIZ</div>
        </div>
        <div class="fontStyle">
          <div class="fontLength">{{ $t('lang.addresses') }}</div>
          <div>：{{ state4 }} {{ $t('lang.a') }}</div>
        </div>
        <div class="fontStyle">
          <div class="fontLength">{{ $t('lang.personalPledge') }}</div>
          <div>：{{ state5 }} PIZ</div>
        </div>
        <div class="fontStyle">
          <div class="fontLength">{{ $t('lang.shareMining') }}</div>
          <div>：{{ state6 }} PIZ</div>
        </div>
        <div class="fontStyle">
          <div class="fontLength">{{ $t('lang.upgrade') }}</div>
          <div>：{{ state7 }} PIZ</div>
        </div>
        <button @click="handelExtract()">{{ $t('lang.extract') }}</button>
      </div>
    </div>
    <!-- <div class="registerBtn" v-if="!flagRegister">
      <div class="register" @click="handleRegister()">注册</div>
    </div> -->

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" center>
      <div class="diaContent">
        <div class="title1">{{ $t('lang.pledge') }}</div>
        <div class="title2">{{ number3 }} PIZ{{ $t('lang.available') }}</div>
        <div class="inputMag">
          <div class="pizmsg">PIZ</div>
          <input
            class="pizInput"
            v-model="pizNumber"
            placeholder="请输入数量"
          />
        </div>
        <div class="title3" @click="getMaxNumber()">
          {{ $t('lang.maximum') }}
        </div>
        <div class="buttonBox">
          <button
            class="confimBtn"
            @click="confimBtn()"
            :disabled="approveDis"
            :class="{ confimBtnFlag: approveDis }"
          >
            {{ $t('lang.authorization') }}
          </button>
          <button
            class="cancelBtn"
            @click="cancelBtn()"
            :class="{ cancelBtnFlag: flag }"
          >
            {{ $t('lang.pledge') }}
          </button>
        </div>
      </div>
    </el-dialog>

    <!-- <el-button size="mini" type="primary" @click="testDialog"
      >点击一下</el-button
    > -->

    <el-dialog :visible.sync="fullscreenLoading" center>
      <div class="loading">
        <circle2></circle2>
        <div class="loadingText">loading...</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import fun from '../mixins/common.js'
import { Circle2 } from 'vue-loading-spinner'

export default {
  components: {
    Circle2,
  },
  mixins: [fun],
  data() {
    return {
      dialogTest: false,
      fullscreenLoading: false, //置灰开关
      flagRegister: false,
      flag: false,
      approveDis: false,
      dialogVisible: false,
      pizNumber: '',
      number2: '',
      number3: '', //可用的piz
      address: this.$store.state.adsCastle, //城堡合约
      abi: this.$store.state.abiCastle, // 城堡合约地址abi
      address1: this.$store.state.pizTest, //测试piz地址
      abi1: this.$store.state.abiTest, //测试地址abi
      state: '', //用户id
      state0: '', //质押业绩 u
      state1: '', // 个人质押市值 u
      state2: '', //距升级 u
      state3: '',
      state4: '',
      state5: '',
      state6: '',
      state7: '', //距升级还差 piz
      level: '', //我的等级
      precision: '', //精度
      raddress: '', //推荐人地址
      addressAll: '', //钱包地址
      usdtState: '',
      pizState: '',
    }
  },
  created() {
    this.getStatsMsg()
    this.getPizNumber()
    this.hendleWalletBtn()
  },
  methods: {
    testDialog() {
      this.dialogTest = true
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
    // 获得用户信息getStats
    async getStatsMsg() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .getStats(newAccounts)
        .call()
        .then((res) => {
          console.log('huihuihui', res)
          this.raddress = res.referer
          this.level = res.usdtstats[6]
          this.state = res.usdtstats[0]
          this.state0 = res.usdtstats[1] / Math.pow(10, 18)
          this.state0 = Math.floor(this.state0 * 1000000) / 1000000
          this.state1 = res.usdtstats[3] / Math.pow(10, 18)
          this.state1 = Math.floor(this.state1 * 1000000) / 1000000
          this.state2 = res.usdtstats[7] / Math.pow(10, 18)
          this.state2 = Math.floor(this.state2 * 1000000) / 1000000
          this.state3 = res.pizstats[1] / Math.pow(10, 6)
          this.state3 = Math.floor(this.state3 * 1000000) / 1000000
          this.state4 = res.pizstats[4]
          this.state5 = res.pizstats[3] / Math.pow(10, 6)
          this.state5 = Math.floor(this.state5 * 1000000) / 1000000
          this.state6 = res.pizstats[5] / Math.pow(10, 6)
          this.state6 = Math.floor(this.state6 * 1000000) / 1000000
          this.state7 = res.pizstats[7] / Math.pow(10, 6)
          this.state7 = Math.floor(this.state7 * 1000000) / 1000000
          if (this.state != 0) {
            this.flagRegister = true
          }
        })
      // this.usdtState = await contractInstance.methods
      //   .getUsdt(this.state0)
      //   .call()
      // this.pizState = await contractInstance.methods.getPiz(this.state0).call()
    },

    handlePledge() {
      this.dialogVisible = true
      this.pizNumber = ''
    },
    handleClose() {
      this.dialogVisible = false
      this.pizNumber = ''
    },
    // 授权approve
    async confimBtn() {
      this.fullscreenLoading = true
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi1, this.address1)
      console.log(this.abi1)
      console.log(this.address1)
      console.log('contractInstance', contractInstance)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precision = res
          console.log('this.precision', this.precision)
        })
      const res = await contractInstance.methods
        .approve(
          this.address,
          web3.utils.fromDecimal(this.pizNumber * Math.pow(10, this.precision))
        )
        .send({ from: newAccounts })
        .then((res) => {
          console.log('授权approve', res)
          if (res.status == true) {
            this.$message.success('授权成功')
            this.flag = true
            this.fullscreenLoading = false
            this.approveDis = true
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error('用户拒绝事务签名')
          this.fullscreenLoading = false
        })
    },
    // 质押farming
    async cancelBtn() {
      if (!this.flag) {
        this.$message.warning('请先授权')
        return
      }
      // this.fullscreenLoading = true
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .farming(
          web3.utils.fromDecimal(this.pizNumber * Math.pow(10, this.precision))
        )
        .send({ from: newAccounts })
        .then((res) => {
          console.log('质押', res)
          if (res.status == true) {
            this.$message.success('质押成功')
            this.getPizNumber()
            this.getMaxNumber()
            this.dialogVisible = false
            this.pizInput = ''
            this.flag = false
            this.approveDis = false
            // this.fullscreenLoading = false
          }
        })
        .catch((err) => {
          console.log(err)
          if (res.status == false) {
            this.$message.error('质押失败')
            this.dialogVisible = false
            this.pizInput = ''
            this.flag = false
            this.approveDis = false
            // this.fullscreenLoading = false
          }
        })
    },
    // 提取（收割）reap
    async handelExtract() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      const res = contractInstance.methods
        .reap()
        .send({ from: newAccounts })
        .then((res) => {
          console.log('提取', res)
          if (res.status == true) {
            this.$message.success('提取成功')
          }
        })
        .catch((err) => {
          console.log(err)
          if (res.status == false) {
            this.$message.error('提取失败')
          }
        })
    },
    // 注册 register
    async handleRegister() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .register(this.raddress)
        .send({ from: newAccounts })
        .then((res) => {
          console.log('resres', res)
          this.getStatsMsg()
        })
        .catch((err) => {
          console.log('errerr', err)
        })
    },
    // 获得可用piz
    async getPizNumber() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi1, this.address1)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precision = res
        })
      await contractInstance.methods
        .balanceOf(newAccounts)
        .call()
        .then((res) => {
          console.log(res)
          this.number3 = res / Math.pow(10, this.precision)
        })
    },

    //最大的值
    async getMaxNumber() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi1, this.address1)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precision = res
        })
      await contractInstance.methods
        .balanceOf(newAccounts)
        .call()
        .then((res) => {
          console.log('this.pizNumber', res)
          this.pizNumber = res / Math.pow(10, this.precision)
        })
    },
    // 获取可用piz/最大的值
    // async getData(a) {
    //   const accounts = await this.getAccounts()
    //   const newAccounts = accounts[0]
    //   const contractInstance = this.contractWebEth(this.abi1, this.address1)
    //   await contractInstance.methods
    //     .decimals()
    //     .call()
    //     .then((res) => {
    //       this.precision = res
    //     })
    //   if (a == 1) {
    //     await contractInstance.methods
    //       .balanceOf(newAccounts)
    //       .call()
    //       .then((res) => {
    //         this.number3 = res / Math.pow(10, this.precision)
    //       })
    //   } else {
    //     await contractInstance.methods
    //       .balanceOf(newAccounts)
    //       .call()
    //       .then((res) => {
    //         this.pizNumber = res / Math.pow(10, this.precision)
    //       })
    //   }
    // },

    // 获得piz地址
    // async getPizAaddress() {
    //   const accounts = await this.getAccounts()
    //   const newAccounts = accounts[0]
    //   const contractInstance = this.contractWebEth(this.abi, this.address)
    //   await contractInstance.methods
    //     .pools(this.pid)
    //     .call()
    //     .then((res) => {})
    // },
  },
  // computed: {
  //   async hendleWalletBtn() {
  //     if (typeof window.ethereum !== 'undefined') {
  //       console.log('MetaMask is installed!')
  //     }
  //     const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  //     console.log(accounts)
  //     this.addressAll = accounts[0]
  //   },
  // },
  // watch: {},
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .titleMsg {
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin-top: 70px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #333333;
  }
  .titleNav {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    margin: 20px 0 40px 0;
    font-weight: 400;
    color: #666666;
  }
  .content {
    width: 807px;
    height: 380px;
    margin: auto;
    display: flex;
    flex-direction: row;
    .left {
      display: inline-block;
      width: 380px;
      height: 583px;
      margin-right: 45px;
      background: #ffffff;
      box-shadow: 0px 0px 42px 2px rgba(180, 180, 180, 0.16);
      border-radius: 20px;
      .leftImg img {
        width: 152px;
        height: 234px;
        margin: 34px 114px 20px;
      }
      .leftLevel {
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        color: #666666;
        .leftLevel1 {
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #000000;
        }
        .fontStyle {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .fontLength {
            width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      button {
        width: 195px;
        height: 58px;
        display: block;
        margin: auto;
        margin-top: 10px;
        background: #1ec7d5;
        border-radius: 29px;
        cursor: pointer;
        font-size: 20px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #ffffff;
        border: 0;
        outline: none;
      }
    }
    .right {
      display: inline-block;
      width: 380px;
      height: 583px;
      background: #ffffff;
      box-shadow: 0px 0px 42px 2px rgba(180, 180, 180, 0.16);
      border-radius: 20px;
      font-size: 20px;
      font-family: PingFang-SC-Regular, PingFang-SC;
      font-weight: 400;
      color: #666666;
      text-align: center;
      line-height: 40px;
      .rightTitle {
        width: 290px;
        height: 55px;
        margin: auto;
        color: #333333;
        margin-top: 80px;
        margin-bottom: 31px;
        border-bottom: 1px solid #979797;
        font-size: 24px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #000000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      button {
        width: 195px;
        height: 58px;
        display: block;
        margin: auto;
        margin-top: 95px;
        background: #1ec7d5;
        border-radius: 29px;
        cursor: pointer;
        font-size: 20px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #ffffff;
        border: 0;
        outline: none;
      }
      .fontStyle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .fontLength {
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
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

  //弹框
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
        font-size: 20px;
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
        background: #1ec7d5;
        border-radius: 12px;
        font-size: 24px;
        border: none;
        color: #ffffff;
        outline: none;
        cursor: pointer;
      }
      .confimBtnFlag {
        width: 520px;
        height: 60px;
        font-size: 24px;
        background: #cccccc;
        border-radius: 12px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .cancelBtn {
        width: 520px;
        height: 60px;
        font-size: 24px;
        background: #cccccc;
        border-radius: 12px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .cancelBtnFlag {
        width: 520px;
        height: 60px;
        font-size: 24px;
        background: #1ec7d5;
        border-radius: 12px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
      }
      // .cancelBtn:hover {
      //   background: #1ec7d5;
      //   color: #fff;
      // }
      // .confimBtn:hover {
      //   background: #1ec7d5;
      //   color: #fff;
      // }
    }
  }
  .loading {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .loadingText {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .el-dialog__body {
    width: 200px;
    .loading {
      .spinner {
        width: 80px !important;
        height: 80px !important;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
    padding-bottom: 20px;
    .titleMsg {
      font-size: 18px;
      margin: 40px 0 0 0;
    }
    .titleNav {
      font-size: 12px;
      margin: 10px 0 20px 0;
    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .left {
        width: 266px;
        height: 408px;
        margin-right: 0;
        margin-bottom: 20px;
        .leftImg {
          display: flex;
          justify-content: center;
          img {
            width: 106px;
            height: 164px;
            margin: 22px 0 13px 0;
          }
        }
        .leftLevel {
          font-size: 14px;
          div {
            height: 27px;
            line-height: 27px;
          }
          .fontStyle {
            .fontLength {
              width: 110px;
            }
          }
        }
        button {
          width: 163px;
          height: 40px;
          font-size: 14px;
          margin: auto;
          margin-top: 12px;
          margin-bottom: 22px;
        }
      }
      .right {
        width: 266px;
        height: 408px;
        div {
          font-size: 14px;
          height: 27px;
          line-height: 27px;
        }
        .rightTitle {
          width: 203px;
          border-bottom: 1px solid #ccc;
          font-size: 17px;
          margin-top: 56px;
          margin-bottom: 26px;
        }
        button {
          width: 163px;
          height: 40px;
          font-size: 14px;
          margin: auto;
          margin-top: 70px;
          margin-bottom: 22px;
        }
        .fontStyle {
          .fontLength {
            width: 110px;
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
        .confimBtnFlag {
          width: 250px;
          height: 30px;
          border-radius: 6px;
          font-size: 12px;
          background: #cccccc;
          color: #ffffff;
        }
        .cancelBtn {
          width: 250px;
          height: 30px;
          background: #cccccc;
          border-radius: 6px;
          font-size: 12px;
        }
        .cancelBtnFlag {
          width: 250px;
          height: 30px;
          font-size: 24px;
          background: #1ec7d5;
          border-radius: 6px;
          font-size: 12px;
        }
      }
    }
    .loading {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .loadingText {
        margin-top: 10px;
        font-size: 12px;
        font-weight: bold;
      }
    }
    .el-dialog__body {
      .loading {
        .spinner {
          width: 40px !important;
          height: 40px !important;
        }
      }
    }
  }
}
</style>

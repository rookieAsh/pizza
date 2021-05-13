<template>
  <div class="container">
    <div class="titleMsg">USDT-ZOO/LP {{ $t('lang.pledgeToDig') }}</div>
    <div class="titleNav">
      {{ $t('lang.deposit') }} USDT-ZOO {{ $t('lang.obtain') }} ZOO
    </div>
    <div class="content">
      <div class="left">
        <div class="box1">{{ number1 }}</div>
        <div class="box2">{{ $t('lang.obtain') }} ZOO</div>
        <div class="box3">
          <button @click="getDate()">{{ $t('lang.obtain') }}</button>
        </div>
      </div>
      <div class="right">
        <div class="box1">{{ number2 }}</div>
        <div class="box2">USDT-ZOO{{ $t('lang.pledged') }}</div>
        <div class="box3">
          <button @click="handlePizdig()">{{ $t('lang.pledge') }}</button>
        </div>
      </div>
    </div>
    <div class="footerBtn3">
      <button class="button" round @click="harvestAndRedemption()">
        {{ $t('lang.harvestRedeem') }}
      </button>
    </div>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" center>
      <div class="diaContent">
        <div class="title1">{{ $t('lang.pledge') }}</div>
        <div class="title2">{{ number3 }} LP {{ $t('lang.available') }}</div>

        <div class="inputMag">
          <div class="pizmsg">USDT-ZOO</div>
          <input class="pizInput" v-model="pizNumber" placeholder="" />
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
    <!-- 加载框 -->
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
  mixins: [fun],
  components: {
    Circle2,
  },
  data() {
    return {
      fullscreenLoading: false, //置灰开关
      flag: false,
      approveDis: false,
      dialogVisible: false,
      address1: '', //池子地址
      pizAddress: this.$store.state.pizTest, //piz地址
      // pizAbi: this.$store.state.abiTest,
      abi1: this.$store.state.abiTest, //测试地址abi
      address: this.$store.state.adsFarm, //农场合约地址
      abi: this.$store.state.abiFarm, //农场合约合约地址abi
      pid: this.$route.query.key,
      number1: '',
      number2: '',
      number3: '',
      pizNumber: '',
      precision: '', //精度
      precisionPiz: '',
      number: '',
      number4: '', //原生质押数量的值
    }
  },
  created() {
    this.getPizAaddress()
    // this.getPrecision()
    // this.getDateNum1()
    // this.getDateNum2()
    // this.getPizNumber()
    // this.getMaxNumber()
  },
  methods: {
    handlePizdig() {
      this.dialogVisible = true
      this.pizNumber = ''
      this.getPizAaddress()
      console.log(this.pid)
    },
    // 关闭弹窗
    handleClose() {
      this.dialogVisible = false
      this.pizNumber = ''
    },

    // 获得池子地址
    async getPizAaddress() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .poolInfo(this.pid)
        .call()
        .then((res) => {
          this.address1 = res.lpToken
          this.getPrecision()
          this.getDateNum1()
          this.getDateNum2()
          this.getPizNumber()
        })
    },
    //获得最大的值
    async getMaxNumber() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi1, this.address1)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precision = res
          console.log('this.precision0', this.precision)
        })
      await contractInstance.methods
        .balanceOf(newAccounts)
        .call()
        .then((res) => {
          this.pizNumber = res / Math.pow(10, this.precision)
          // this.pizNumber = Math.floor(this.pizNumber, 6)
          // this.pizNumber = this.pizNumber.toFixed(6)
        })
    },
    // 先获取池子的代币精度
    async getPrecision() {
      console.log('this.precision', this.precision)
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi1, this.address1)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precision = res
        })
    },
    // 获得可用LP
    async getPizNumber() {
      console.log('this.precision', this.precision)
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
          this.number3 = res / Math.pow(10, this.precision)
          this.number3 = Math.floor(this.number3 * 1000000) / 1000000
        })
    },
    // 授权approve 传进去的数字转16进制
    async confimBtn() {
      this.fullscreenLoading = true
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
        .approve(
          this.address,
          web3.utils.fromDecimal(this.pizNumber * Math.pow(10, this.precision))
        )
        .send({ from: newAccounts })
        .then((res) => {
          console.log('授权approve', res)
          if (res.status == true) {
            this.$message.success(this.$t('lang.authorizationSuc'))
            this.flag = true
            this.fullscreenLoading = false
            this.approveDis = true
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error(this.$t('lang.userReject'))
          this.fullscreenLoading = false
        })
    },
    // 质押stake 传进去的数字转16进制
    async cancelBtn() {
      if (!this.flag) {
        this.$message.warning(this.$t('lang.pleaseAuthorize'))
        return
      }
      this.getPrecision()
      // this.fullscreenLoading = true
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .deposit(
          this.pid,
          web3.utils.fromDecimal(this.pizNumber * Math.pow(10, this.precision))
        )
        .send({ from: newAccounts })
        .then((res) => {
          if (res.status == true) {
            this.$message.success(this.$t('lang.pledgeSuc'))
            this.flag = false
            this.pizInput = ''
            this.dialogVisible = false
            this.approveDis = false
            // this.fullscreenLoading = false
            this.getDateNum2()
            this.getDateNum1()
            this.getPizNumber()
          }
        })
        .catch((err) => {
          console.log(err)
          if (res.status == false) {
            this.$message.error(this.$t('lang.pledgeFail'))
            // this.fullscreenLoading = false
            this.flag = false
            this.pizInput = ''
            this.dialogVisible = false
            this.approveDis = false
          }
        })
    },
    // 获取
    async getDate() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        // .reap(this.pid)
        .withdraw(this.pid, 0)
        .send({ from: newAccounts })
        .then((res) => {
          this.$message.success(this.$t('lang.toBeSuccessful'))
        })
        .catch((err) => {
          console.log(err)
          this.$message.error(this.$t('lang.userReject'))
        })
    },
    //获得piz精度
    async getPizPrecision() {
      const contractInstance = this.contractWebEth(this.abi1, this.pizAddress)
      await contractInstance.methods
        .decimals()
        .call()
        .then((res) => {
          this.precisionPiz = res
        })
    },
    // 获取数量 (可提取收益)
    async getDateNum1() {
      console.log(this.pid)
      this.getPizPrecision()
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      console.log(newAccounts)
      const contractInstance = this.contractWebEth(this.abi, this.address)
      const res = await contractInstance.methods
        .pending(this.pid, newAccounts)
        .call()
      this.number1 = res / Math.pow(10, this.precisionPiz)
      this.number1 = Math.floor(this.number1 * 100) / 100
    },
    // 质押数量
    async getDateNum2() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      const res = await contractInstance.methods
        .userInfo(this.pid, newAccounts)
        .call()
      this.number4 = res.amount
      this.number = res.amount / Math.pow(10, this.precision)
      this.number2 = Math.floor(this.number * 1000000) / 1000000
    },
    // 收割并赎回
    async harvestAndRedemption() {
      this.getDateNum2()
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        // .exit(this.pid)
        .withdraw(this.pid, this.number4)
        .send({ from: newAccounts })
        .then((res) => {
          if (res.status == true) {
            this.$message.success(this.$t('lang.harvestSuc'))
            this.getDateNum1()
            this.getDateNum2()
          }
        })
        .catch((err) => {
          if (res.status == false) {
            this.$message.error(this.$t('lang.harvestFail'))
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .titleMsg {
    text-align: center;
    font-size: 36px;
    margin-top: 130px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #333333;
  }
  .titleNav {
    text-align: center;
    font-size: 24px;
    margin: 20px 0 30px 0;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    color: #666666;
  }
  .content {
    display: flex;
    flex-direction: row;
    width: 600px;
    margin: auto;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 278px;
      height: 277px;
      background-color: #ffffff;
      margin-right: 20px;
      .box1 {
        height: 32px;
        margin-top: 54px;
        font-size: 24px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #1ec7d5;
      }
      .box2 {
        margin: 30px 0 55px 0;
        font-size: 18px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #7d7d7d;
      }
      .box3 {
        button {
          width: 195px;
          height: 58px;
          font-weight: bold;
          background: #1ec7d5;
          font-weight: bold;
          font-size: 20px;
          color: #ffffff;
          border-radius: 29px;
          outline: none;
          border: none;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 278px;
      height: 277px;
      background-color: #ffffff;
      margin-right: 20px;
      .box1 {
        height: 32px;
        margin-top: 54px;
        font-size: 24px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #1ec7d5;
      }
      .box2 {
        margin: 30px 0 55px 0;
        font-size: 18px;
        font-family: PingFang-SC-Regular, PingFang-SC;
        font-weight: 400;
        color: #7d7d7d;
      }
      .box3 {
        button {
          width: 195px;
          height: 58px;
          font-weight: bold;
          background: #1ec7d5;
          font-weight: bold;
          font-size: 20px;
          color: #ffffff;
          border-radius: 29px;
          outline: none;
          border: none;
        }
      }
    }
  }
  .footerBtn3 {
    width: 100%;
    text-align: center;
    margin: 37px 0 0 0;
    .button {
      width: 490px;
      height: 58px;
      color: #ffffff;
      background: #1ec7d5;
      border-radius: 29px;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      border: none;
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

@media screen and(max-width: 767px) {
  .container {
    width: 100%;
    .titleMsg {
      font-size: 18px;
      margin: 40px 0 0 0;
    }
    .titleNav {
      font-size: 12px;
      margin: 10px 0 20px 0;
    }
    .content {
      width: 350px;
      height: 195px;
      .left {
        width: 167px;
        height: 166px;
        border-radius: 12px;
        margin: 0 15px 0 0;
        .box1 {
          font-size: 15px;
          margin: 32px 0 0 0;
        }
        .box2 {
          font-size: 11px;
          margin: 6px 0 33px 0;
        }
        .box3 {
          width: 117px;
          height: 35px;
          button {
            width: 117px;
            height: 35px;
            font-size: 12px;
          }
        }
      }
      .right {
        width: 167px;
        height: 166px;
        border-radius: 12px;
        margin: 0 0 0 0;
        .box1 {
          font-size: 15px;
          margin: 32px 0 0 0;
        }
        .box2 {
          font-size: 11px;
          margin: 6px 0 33px 0;
        }
        .box3 {
          width: 117px;
          height: 35px;
          button {
            width: 117px;
            height: 35px;
            font-size: 12px;
          }
        }
      }
    }
    .footerBtn3 {
      display: show;
      width: 100%;
      text-align: center;
      margin: 0 0 0 0;
      .button {
        width: 248px;
        height: 35px;
        color: #ffffff;
        background: #1ec7d5;
        border-radius: 35px;
        font-size: 12px;
        outline: none;
        border: none;
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
          width: 95px;
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
          border-radius: 6px;
          font-size: 12px;
          background: #1ec7d5;
          color: #ffffff;
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

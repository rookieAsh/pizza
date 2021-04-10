<template>
  <div class="container">
    <div class="titleMsg">USDT-PIZ/LP 质押挖矿</div>
    <div class="titleNav">存入USDT-PIZ</div>
    <div class="content">
      <div class="left">
        <div class="box1">{{ number1 }}</div>
        <div class="box2">获取PIZ</div>
        <div class="box3">
          <button @click="getDate()">获取</button>
        </div>
      </div>
      <div class="right">
        <div class="box1">{{ number2 }}</div>
        <div class="box2">USDT-PIZ/LP已质押</div>
        <div class="box3">
          <button @click="handlePizdig()">质押</button>
        </div>
      </div>
    </div>
    <div class="footerBtn3">
      <button class="button" round @click="harvestAndRedemption()">
        收获并赎回
      </button>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      center
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="加载中..."
    >
      <div class="diaContent">
        <div class="title1">质押</div>
        <div class="title2">{{ number3 }} USDT-PIZ/LP可用</div>

        <div class="inputMag">
          <div class="pizmsg">PIZ</div>
          <input
            class="pizInput"
            v-model="pizNumber"
            placeholder="请输入数量"
          />
        </div>
        <div class="title3" @click="getMaxNumber()">最大值</div>
        <div class="buttonBox">
          <button class="confimBtn" @click="confimBtn()">授权</button>
          <button
            class="cancelBtn"
            @click="cancelBtn()"
            :class="{ cancelBtnFlag: flag }"
          >
            质押
          </button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import fun from '../mixins/common.js'

export default {
  mixins: [fun],
  data() {
    return {
      fullscreenLoading: false, //置灰开关
      flag: false,
      dialogVisible: false,
      address1: '', //测试池子地址
      pizAddress: '0x116f88f48da8da893bc390564d430d918eb0412e', //piz地址
      abi1: this.$store.state.abiTest, //测试地址abi
      address: this.$store.state.adsFarm, //农场合约地址
      abi: this.$store.state.abiFarm, //农场合约合约地址abi
      pid: this.$route.query.key,
      number1: '',
      number2: '',
      number3: '',
      pizNumber: '',
      precision: '', //精度
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

    // 获得piz地址
    async getPizAaddress() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .pools(this.pid)
        .call()
        .then((res) => {
          this.address1 = res.lpToken
          console.log(11111111, this.address1)
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
        })
      await contractInstance.methods
        .balanceOf(newAccounts)
        .call()
        .then((res) => {
          this.pizNumber = res / Math.pow(10, this.precision)
          this.pizNumber = this.pizNumber.toFixed(2)
        })
    },
    // 先获取精度
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
    // 获得可用piz
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
          console.log(res)
          this.number3 = res / Math.pow(10, this.precision)
          this.number3 = this.number3.toFixed(6)
        })
    },
    // 授权approve
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
        .approve(this.address, this.pizNumber * Math.pow(10, this.precision))
        .send({ from: newAccounts })
        .then((res) => {
          console.log('授权approve', res)
          if (res.status == true) {
            this.$message.success('授权成功')
            this.flag = true
            this.fullscreenLoading = false
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error('用户拒绝事务签名')
          this.fullscreenLoading = false
        })
    },
    // 质押stake
    async cancelBtn() {
      if (!this.flag) {
        this.$message.warning('请先授权')
        return
      }
      this.getPrecision()
      this.fullscreenLoading = true
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .stake(this.pizNumber * Math.pow(10, this.precision), this.pid)
        .send({ from: newAccounts })
        .then((res) => {
          if (res.status == true) {
            this.$message.success('质押成功')
            this.flag = false
            this.pizInput = ''
            this.dialogVisible = false
            this.fullscreenLoading = false
            this.getDateNum2()
            this.getDateNum1()
            this.getPizNumber()
          }
        })
        .catch((err) => {
          console.log(err)
          if (res.status == false) {
            this.$message.error('质押失败')
            this.fullscreenLoading = false
          }
        })
    },
    // 获取
    async getDate() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .reap(this.pid)
        .send({ from: newAccounts })
        .then((res, err) => {
          if (!err) {
            console.log(res)
          }
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
    // 获取数量
    async getDateNum1() {
      console.log(this.pid)
      this.getPizPrecision()
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      console.log(newAccounts)
      const contractInstance = this.contractWebEth(this.abi, this.address)
      const res = await contractInstance.methods
        .earned(newAccounts, this.pid)
        .call()
      this.number1 = res / Math.pow(10, this.precisionPiz)
      console.log('获取earned', res)
      this.number1 = this.number1.toFixed(2)
    },
    // 质押数量
    async getDateNum2() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      const res = await contractInstance.methods
        .stakes(this.pid, newAccounts)
        .call()
      this.number2 = res.amount / Math.pow(10, this.precision)
      console.log('stakes', res)
      this.number2 = this.number2.toFixed(7)
    },
    // 收割并赎回
    async harvestAndRedemption() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      const contractInstance = this.contractWebEth(this.abi, this.address)
      await contractInstance.methods
        .exit(this.pid)
        .send({ from: newAccounts })
        .then((res) => {
          console.log('提取', res)
          if (res.status == true) {
            this.$message.success('提取成功')
            this.getDateNum1()
            this.getDateNum2()
          }
        })
        .catch((err) => {
          console.log(err)
          if (res.status == false) {
            this.$message.error('提取失败')
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
  }
}
</style>

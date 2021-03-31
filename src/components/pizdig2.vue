<template>
  <div class="container">
    <div class="titleMsg">BUSD-PIZ/LP质押挖矿</div>
    <div class="titleNav">存入USDT-PIZ</div>
    <div class="content">
      <div class="left">
        <div class="box1">{{ number1 }}</div>
        <div class="box2">获取PIZ</div>
        <div class="box3">
          <button>获取</button>
        </div>
      </div>
      <div class="right">
        <div class="box1">{{ number2 }}</div>
        <div class="box2">PIZ已质押</div>
        <div class="box3">
          <button @click="handlePizdig1()">质押</button>
        </div>
      </div>
    </div>
    <div class="footerBtn3">
      <button class="button" round>收获并赎回</button>
    </div>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" center>
      <div class="diaContent">
        <div class="title1">质押</div>
        <div class="title2">{{ number2 }} PIZ可用</div>

        <div class="inputMag">
          <div class="pizmsg">PIZ</div>
          <input class="pizInput" placeholder="请输入数量" />
        </div>
        <div class="title3">最大值</div>
        <div class="buttonBox">
          <button class="confimBtn" @click="confimBtn()">授权</button>
          <button class="cancelBtn" @click="cancelBtn()">质押</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      pid: this.$route.query.key,
      abi: this.$store.state.abi,
      address: '0x10FC9968D9c36a06eB08C5A81B7343431124e337',
      number1: '',
      number2: '',
      pizNumber: '',
    }
  },
  created() {
    this.getDateNum1()
    this.getDateNum2()
  },
  methods: {
    handlePizdig1() {
      this.dialogVisible = true
    },
    confimBtn() {
      this.dialogVisible = false
    },
    cancelBtn() {
      this.dialogVisible = false
    },
    handleClose() {
      this.dialogVisible = false
    },
    // 获取
    async getDate() {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const newAccounts = accounts[0]
      const contractInstance = new web3.eth.Contract(this.abi, this.address)
      const res = await contractInstance.methods
        .reap(this.pid)
        .send({ from: newAccounts })
        .then((res, err) => {
          if (!err) {
            console.log(res)
          }
        })
    },
    // 获取数量
    async getDateNum1() {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const newAccounts = accounts[0]
      const contractInstance = new web3.eth.Contract(this.abi, this.address)
      const res = await contractInstance.methods.earned(newAccounts, this.pid)
      this.number1 = res.arguments[1]
    },
    // 质押数量
    async getDateNum2() {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const newAccounts = accounts[0]
      const contractInstance = new web3.eth.Contract(this.abi, this.address)
      const res = await contractInstance.methods.stakeInfos(
        newAccounts,
        this.pid
      )
      this.number2 = res.arguments[1]
    },
    // 收割并赎回
    async harvestAndRedemption() {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      const newAccounts = accounts[0]
      const contractInstance = new web3.eth.Contract(this.abi, this.address)
      const res = await contractInstance.methods
        .exit(this.pid)
        .send({ from: newAccounts })
        .then((res, err) => {
          if (!err) {
            console.log(res)
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
          background: #1ec7d5;
          border-radius: 6px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

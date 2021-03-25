<template>
  <div class="container">
    <div class="content">
      <div class="tabsLiqui">
        <div class="trading" @click="toGo1()">兑换</div>
        <div class="liquidity">流动性</div>
      </div>
      <div class="main">
        <div class="handerTag">
          <div class="handerLeft">
            <span>流动性</span>
            <span>增加流动性以接收LP代币</span>
          </div>
          <div class="handerRigth">
            <div @click="liquiditySetBtn()">
              <img src="../assets/image/tradLIqui/set.png" alt="" />
            </div>
            <div>
              <img src="../assets/image/tradLIqui/time.png" alt="" />
            </div>
          </div>
        </div>
        <div class="footerBtn">
          <button @click="addLiquidity">增加流动性</button>
        </div>
        <div class="footerMsg">
          <div>您的流动性</div>
          <div>
            <img src="../assets/image/tradLIqui/wenhao.png" alt="" />
          </div>
        </div>
        <!-- --------------------增加流动性------------------- -->
        <div class="usdtPizMsg">
          <div class="usdtBox1">
            <div class="usdtBox1_1">
              <div></div>
              <div></div>
              <div>USDT-PIZ</div>
            </div>
            <div class="usdtBox1_2">
              <img src="../assets/image/tradLIqui/down.png" alt="" />
            </div>
          </div>
          <div class="usdtBox2">
            <div class="usdtBox2_1">
              <div>PIZ份额</div>
              <div>231231</div>
            </div>
            <div class="usdtBox2_1">
              <div>USDT份额</div>
              <div>27.2318</div>
            </div>
            <div class="usdtBox2_1">
              <div>你的资金池占比</div>
              <div>0.0069%</div>
            </div>
            <div class="usdtBox2_1">
              <div>凭证：12.312312</div>
              <div>拆分/合并</div>
            </div>
            <div class="footerBtn2">
              <div><button>添加</button></div>
              <div><button>赎回</button></div>
            </div>
          </div>
        </div>
      </div>

      <el-dialog
        title="设定值"
        :visible.sync="setBtnDialog"
        :before-close="setBtnClose"
      >
        <div class="dialogContent">
          <div class="box1">
            滑动公差
            <el-tooltip
              class="item"
              effect="light"
              content="如果价格的不利变化超过此百分比，您的交易将恢复。"
              placement="right"
            >
              <img src="../assets/image/tradLIqui/img1.png" alt="" />
            </el-tooltip>
          </div>
          <div class="box2">
            <div class="box2_1">0.1%</div>
            <div class="box2_1">0.5%</div>
            <div class="box2_1">1.0%</div>
            <div class="box2_2">
              <input v-model="inputTolerance" /><span>%</span>
            </div>
          </div>
          <div class="box3">
            交易截止日期
            <el-tooltip
              class="item"
              effect="light"
              content="如果您的交易待处理的时间超过此时间，则它将还原。"
              placement="right"
            >
              <img src="../assets/image/tradLIqui/img1.png" alt="" />
            </el-tooltip>
          </div>
          <div class="box4">
            <input v-model="inputMin" />
            分钟
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTolerance: '', //滑动公差
      inputMin: '', //分钟
      setBtnDialog: false,
    }
  },
  created() {},
  methods: {
    addLiquidity() {
      this.$router.push('/dialog')
    },
    toGo1() {
      this.$router.push('/trading')
    },
    // 设置按钮
    liquiditySetBtn() {
      this.setBtnDialog = true
    },
    setBtnClose() {
      this.setBtnDialog = false
      this.inputTolerance = ''
      this.inputMin = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .content {
    width: 100%;
    margin: auto;
    margin-top: 135px;
    .tabsLiqui {
      width: 229px;
      height: 56px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      border-radius: 28px;
      border: 1px solid #1ec7d5;
      margin-bottom: 40px;
      .trading {
        display: inline-block;
        width: 100px;
        height: 38px;
        line-height: 38px;
        color: #1ec7d5;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
      }
      .liquidity {
        display: inline-block;
        width: 100px;
        height: 38px;
        font-weight: bold;
        line-height: 38px;
        color: #ffffff;
        background: #1ec7d5;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
      }
    }
    .main {
      width: 440px;
      background: #ffffff;
      box-shadow: 0px 0px 42px 2px rgba(180, 180, 180, 0.16);
      border-radius: 19px;
      margin: auto;
      padding: 25px;
      .handerTag {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .handerLeft {
          :nth-child(1) {
            display: inline-block;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            font-weight: 700;
            margin-right: 12px;
          }
          :nth-child(2) {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 600;
            color: #666666;
          }
        }
      }
      .handerRigth {
        display: flex;
        flex-direction: row;
        :nth-child(2) {
          margin-left: 10px;
        }
      }
      .footerBtn button {
        width: 448px;
        height: 52px;
        margin: 60px 0 21px 0;
        background: #1ec7d5;
        border-radius: 31px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        border: none;
        outline: 0;
      }
      .footerMsg {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        margin: 0 0 31px 0;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #666666;
      }
      .usdtPizMsg {
        .usdtBox1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 40px;
          line-height: 40px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #1ec7d5;
          .usdtBox1_1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            :nth-child(1) {
              width: 30px;
              height: 30px;
              margin-right: -10px;
              border-radius: 19px;
              background-color: #d8d8d8;
            }
            :nth-child(2) {
              width: 30px;
              height: 30px;
              border-radius: 19px;
              background-color: #d8d8d8;
            }
            :nth-child(3) {
              margin-left: 8px;
              font-weight: bold;
              color: #333333;
            }
          }
        }
        .usdtBox2 {
          border-bottom: 1px solid #979797;
          .usdtBox2_1 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 32px;
            font-size: 16px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: #333333;
            line-height: 32px;
          }
        }
        .footerBtn2 {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin: 28px 0 31px 0;
          button {
            width: 164px;
            height: 52px;
            background: #1ec7d5;
            line-height: 40px;
            font-size: 20px;
            font-weight: 600;
            border-radius: 18px;
            color: #ffffff;
            border-radius: 50px;
            border: none;
            outline: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .container {
    .content {
      margin: 40px 0 0 0;
      .tabsLiqui {
        width: 150px;
        height: 38px;
        font-size: 11px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .trading {
          width: 62px;
          height: 25px;
          line-height: 25px;
        }
        .liquidity {
          width: 62px;
          height: 25px;
          line-height: 25px;
        }
      }
      .main {
        width: 295px;
        padding: 20px;
        .handerTag {
          .handerLeft {
            :nth-child(1) {
              font-size: 15px;
            }
            :nth-child(2) {
              font-size: 11px;
            }
          }
          .handerRigth img {
            width: 16px;
            height: 16px;
          }
        }
        .footerBtn {
          button {
            margin: 40px 0 14px 0;
            width: 295px;
            height: 35px;
            font-size: 14px;
          }
        }
        .footerMsg {
          font-size: 11px;
          margin: 0 0 20px 0;
          img {
            width: 12px;
            height: 12px;
          }
        }
        .usdtPizMsg {
          .usdtBox1 {
            margin: 0 0 9px 0;
            padding: 0 0 0 0;
            .usdtBox1_1 {
              :nth-child(1) {
                width: 20px;
                height: 20px;
              }
              :nth-child(2) {
                width: 20px;
                height: 20px;
              }
              :nth-child(3) {
                font-size: 13px;
              }
            }
            .usdtBox1_2 img {
              width: 11px;
              height: 11px;
            }
          }
          .usdtBox2 {
            .usdtBox2_1 {
              height: 22px;
              line-height: 22px;
              div {
                font-size: 11px;
              }
            }
            .footerBtn2 {
              margin: 18px 0 20px 0;
              button {
                width: 110px;
                height: 35px;
                line-height: 35px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="content">
      <div class="tabsDia">
        <div class="trading">兑换</div>
        <div class="liquidity" @click="toGo2()">流动性</div>
      </div>
      <div class="main">
        <div class="handerTag">
          <div class="handerLeft">
            <div class="trading" @click="backLiqui()">
              <img src="../assets/image/tradLIqui/img4.png" alt="" />
              <div>增加流动性</div>
            </div>
          </div>
          <div class="handerRigth">
            <div>
              <img src="../assets/image/tradLIqui/img1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="mainForm1">
          <div class="box1">
            <div>输入</div>
            <div>余额：0</div>
          </div>
          <div class="box2">
            <div class="box2_1">
              <input class="box2InputFrom" placeholder="..." />
            </div>
            <div class="box3">
              <div class="max">MAX</div>
              <div class="bnb">
                <div class="box4">
                  <img src="../assets/image/tradLIqui/img3.png" alt="" /><span
                    >BNB</span
                  >
                </div>
                <!-- <div class="box5">BNB</div> -->
                <div class="box6">
                  <img src="../assets/image/tradLIqui/img2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomBtn">
          <div class="bottomBtn2">+</div>
        </div>
        <div class="mainForm2">
          <div class="box1">
            <div>输出</div>
            <div>--</div>
          </div>
          <div class="box2">
            <div class="box2_1">
              <input class="box2InputTo" placeholder="..." />
            </div>
            <div class="box3">
              <div class="box3_1">选择一种货币</div>
              <div class="box3_2">
                <img src="../assets/image/tradLIqui/img5.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="footerBtn">
          <button @click="click11">输入金额</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    click11() {
      console.log(31231312312)
    },
    toGo2() {
      this.$router.push('/liquidity')
    },
    backLiqui() {
      this.$router.push('/liquidity')
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
    .tabsDia {
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
        justify-content: space-between;
        .handerLeft {
          .trading {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            img {
              display: block;
              height: 18px;
              width: 24px;
              margin-right: 10px;
            }
          }
          :nth-child(2) {
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 700;
            color: #333333;
            line-height: 30px;
            margin-left: 12px;
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
      .mainForm1 {
        width: 415px;
        height: 78px;
        background: #fff6ea;
        border-radius: 13px;
        padding: 22px 14px 12px 18px;
        margin-top: 29px;
        .box1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #666666;
        }
        .box2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .box2_1 {
            .box2InputFrom {
              width: 200px;
              height: 42px;
              line-height: 42px;
              font-size: 30px;
              font-weight: 600;
              color: #1ec7d5;
              background-color: #fff6ea;
              border: none;
              outline: none;
            }
          }
          .box3 {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .max {
            width: 56px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            background: #1ec7d5;
            border-radius: 8px;
            color: #ffffff;
          }
          .bnb {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 115px;
            height: 32px;
            background: #1ec7d5;
            border-radius: 8px;
            color: #ffffff;
            margin-left: 5px;
            .box5 {
              font-weight: 600;
              font-size: 16px;
              margin: 0 10px;
              height: 32px;
              line-height: 34px;
            }
            .box4 {
              height: 32px;
              line-height: 29px;
              img {
                vertical-align: middle;
              }
              span {
                margin: 0 5px;
              }
            }
            .box6 {
              height: 32px;
              line-height: 28px;
              cursor: pointer;
              img {
                vertical-align: middle;
              }
            }
          }
        }
      }
      .bottomBtn {
        width: 100%;
        text-align: center;
        .bottomBtn2 {
          width: 100%;
          margin: 30px 0;
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
      }
      .mainForm2 {
        width: 415px;
        height: 78px;
        background: #fff6ea;
        border-radius: 13px;
        padding: 22px 14px 12px 18px;
        .box1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #666666;
        }
        .box2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .box2_1 {
            .box2InputTo {
              width: 200px;
              height: 42px;
              line-height: 42px;
              font-size: 30px;
              font-weight: 600;
              color: #1ec7d5;
              background-color: #fff6ea;
              border: none;
              outline: none;
            }
          }
          .box3 {
            display: flex;
            flex-direction: row;
            align-items: center;
            .box3_1 {
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 600;
              color: #666666;
            }
            .box3_2 {
              height: 20px;
              margin-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
      .footerBtn button {
        width: 448px;
        height: 52px;
        margin: 40px 0 33px 0;
        background: #1ec7d5;
        border-radius: 31px;
        font-size: 20px;
        font-weight: 600;
        outline: none;
        border: 0;
        cursor: pointer;
        font-family: PingFangSC-Semibold, PingFang SC;
        color: #ffffff;
      }
    }
  }
}




@media screen and (max-width: 767px) {
  .container {
    .content {
      margin: 40px 0 0 0;
      .tabsDia {
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
            .trading {
              img {
                width: 16px;
                height: 12px;
              }
              :nth-child(2) {
                font-size: 15px;
              }
            }
          }
          .handerRigth {
            line-height: 32px;
            img {
              width: 16px;
              height: 16px;
            }
          }
        }
        .mainForm1 {
          width: 265px;
          height: 65px;
          padding: 11px 15px 6px 15px;
          .box1 {
            font-size: 11px;
          }
          .box2 {
            .box2_1 {
              .box2InputFrom {
                font-size: 20px;
                width: 110px;
              }
            }
            .max {
              height: 21px;
              line-height: 21px;
              font-size: 11px;
            }
            .bnb {
              width: 73px;
              height: 21px;
              .box4 {
                height: 16px;
                line-height: 16px;
                img {
                  height: 15px;
                  width: 14px;
                  vertical-align: middle;
                }
                span {
                  margin: 0 5px;
                }
              }
              .box5 {
                font-size: 11px;
                margin: 0 5px;
              }
              .box6 {
                line-height: 30px;
                img {
                  width: 11px;
                  height: 11px;
                }
              }
            }
          }
        }
        .bottomBtn {
          width: 100%;
          margin: 15px 0;
          .bottomBtn2 {
            height: 10px;
            line-height: 3px;
            img {
              margin: auto;
              width: 11px;
              height: 11px;
            }
          }
        }
        .mainForm2 {
          width: 265px;
          height: 65px;
          padding: 11px 15px 6px 15px;
          .box1 {
            font-size: 11px;
          }
          .box2 {
            .box2_1 {
              .box2InputTo {
                font-size: 20px;
                width: 110px;
              }
            }
            .box3 {
              .box3_1 {
                font-size: 11px;
              }
              .box3_2 {
                line-height: 20px;
                img {
                  width: 11px;
                  height: 11px;
                }
              }
            }
          }
        }
        .footerBtn {
          width: 100%;
          text-align: center;
          button {
            width: 295px;
            height: 35px;
            margin: 28px 0 20px 0;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>

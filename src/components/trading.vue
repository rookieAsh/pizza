<template>
  <div class="container">
    <div class="iframeBox">
      <iframe
        src="http://192.168.2.5:3001/#/swap"
        id="mobsf"
        scrolling="no"
        frameborder="0"
        style="position: absolute"
      ></iframe>

      <!-- <iframe
        style="width: 100%; height: 800px"
        id="tempHtml"
        ref="tempHtml"
        frameborder="0"
      ></iframe> -->
    </div>
  </div>
</template>

<script>
// document.getElementById(
//   'tempHtml'
// ).contentDocument.documentElement.innerHTML = this.ifeData
// import dialog from './dialog.vue'
export default {
  // components: { dialog },
  data() {
    return {
      ifeData: require('../../src/build/index.html'),
      input: '',
      input1: '',
      num: '',
      bnbDialog: false,
      chooseCionDialog: false,
      setBtnDialog: false,
      chooseVal: 1,
      chooseValCion: 0,
    }
  },
  created() {
    window.onresize = () => this.changeMobsfIframe()
  },
  methods: {
    changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = Number(deviceWidth) - 240 + 'px' //数字是页面布局宽度差值
      mobsf.style.height = Number(deviceHeight) - 64 + 'px' //数字是页面布局高度差
    },

    click11() {
      console.log(31231312312)
    },
    toGo2() {
      this.$router.push('/liquidity')
    },
    tradingSetBtn() {
      this.setBtnDialog = true
    },
    setBtnClose() {
      this.setBtnDialog = false
      this.input = ''
      this.input1 = ''
    },
    handleCloseChoose() {
      this.chooseCionDialog = false
    },
    // 交易截止日期
    handleChange() {
      console.log(11)
    },
    //bnb
    handleCloseBnb() {
      this.bnbDialog = false
    },
    // 选择货币
    handleBabBtn() {
      this.bnbDialog = true
    },
    // 选择货币按钮
    handleChooseBtn() {
      this.chooseCionDialog = true
    },
    choose1(val) {
      this.chooseVal = val
      this.bnbDialog = false
    },
    choose2(val) {
      this.chooseVal = val
      this.bnbDialog = false
    },
    choose3(val) {
      this.chooseVal = val
      this.bnbDialog = false
    },
    choose4(val) {
      this.chooseVal = val
      this.bnbDialog = false
    },
    //  选择货币
    chooseCoin1(val) {
      console.log(val)
      this.chooseValCion = val
      this.chooseCionDialog = false
    },
    chooseCoin2(val) {
      this.chooseValCion = val
      this.chooseCionDialog = false
    },
    chooseCoin3(val) {
      this.chooseValCion = val
      this.chooseCionDialog = false
    },
    chooseCoin4(val) {
      this.chooseValCion = val
      this.chooseCionDialog = false
    },
  },
}
</script>

<style lang="scss">
.container {
  width: 100%;
  .iframeBox {
    iframe {
      width: 88%;
      height: 90%;
    }
  }
  .content {
    width: 100%;
    margin: auto;
    margin-top: 135px;
    .tabs {
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
        font-weight: bold;
        color: #ffffff;
        background: #1ec7d5;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
      }
      .liquidity {
        display: inline-block;
        width: 100px;
        height: 38px;
        line-height: 38px;
        color: #1ec7d5;
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
            font-weight: 700;
            color: #333333;
            margin-right: 12px;
          }
          :nth-child(2) {
            font-size: 16px;
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
      .mainForm1 {
        width: 415px;
        height: 78px;
        background: #fff6ea;
        border-radius: 13px;
        padding: 22px 14px 12px 14px;
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
              background-color: #fff;
              border: none;
              outline: none;
            }
          }
          .box3 {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #333333;
            .box3_1 {
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              margin-left: 5px;
            }
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
            width: 115px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            background: #1ec7d5;
            border-radius: 8px;
            color: #ffffff;
            margin-left: 5px;
            .box4 {
              display: flex;
              flex-direction: row;
              align-items: center;
              img {
                width: 24px;
                height: 20px;
              }
              span {
                margin: 0 10px;
              }
            }
            .box6 {
              height: 32px;
              line-height: 28px;
              img {
                vertical-align: middle;
              }
            }
          }
        }
      }
      .bottomBtn {
        width: 100%;
        height: 66px;
        .bottomBtn2 {
          margin: auto;
          width: 20px;
          height: 20px;
          line-height: 66px;
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
              background-color: #fff;
              border: none;
              outline: none;
            }
          }
          .box3 {
            .chooseBox3 {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .box3_1 {
                margin-left: 8px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 600;
                color: #666666;
              }
              .box3_2 {
                margin-left: 10px;
                height: 20px;
                line-height: 26px;
                cursor: pointer;
              }
            }
            .coinNameAndImg {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: 115px;
              height: 32px;
              line-height: 32px;
              text-align: center;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
              background: #1ec7d5;
              border-radius: 8px;
              color: #ffffff;
              .img1 {
                width: 23px;
                height: 20px;
              }
              span {
                margin: 0 10px;
              }
              .img2 {
                width: 15px;
                height: 15px;
              }
            }
          }
        }
      }
      .poor {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        padding: 20px 30px 30px 20px;
      }
      .footerBtn button {
        width: 448px;
        height: 52px;
        background: #1ec7d5;
        border-radius: 31px;
        outline: none;
        border: 0;
        cursor: pointer;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
      }
    }
    .el-dialog__wrapper {
      .el-dialog {
        .el-dialog__header {
          .el-dialog__title {
            display: block;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
    .dialogContent {
      .box1 {
        font-size: 24px;
        font-weight: bold;
        color: #4c4c4c;
        margin: 0 0 20px 0;
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin: 0 0 2px 5px;
        }
      }
      .box2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        .box2_1 {
          width: 131px;
          height: 60px;
          line-height: 60px;
          margin-right: 5px;
          font-size: 24px;
          font-weight: bold;
          color: #4c4c4c;
          text-align: center;
          background-color: #fffaf4;
          border-radius: 12px;
        }
        .box2_1:hover {
          background: #1ec7d5;
          color: #fff;
          cursor: pointer;
        }
        .box2_2 {
          display: flex;
          flex-direction: row;
          width: 250px;
          height: 60px;
          input {
            width: 230px;
            height: 60px;
            border-radius: 12px 0 0 12px;
            line-height: 60px;
            font-size: 24px;
            font-weight: bold;
            color: #4c4c4c;
            background-color: #dbdada;
            border: none;
            outline: none;
          }
          span {
            height: 62px;
            line-height: 62px;
            font-size: 24px;
            background-color: #dbdada;
            border-radius: 0 12px 12px 0;
          }
        }
      }
      .box3 {
        font-size: 24px;
        font-weight: bold;
        color: #4c4c4c;
        margin: 32px 0 20px 0;
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin: 0 0 2px 5px;
        }
      }
      .box4 {
        font-size: 24px;
        color: #4c4c4c;
        font-weight: bold;
        input {
          width: 155px;
          height: 60px;
          line-height: 60px;
          background: #fffaf4;
          border-radius: 12px;
          border: none;
          outline: none;
        }
      }
    }
    .dialogMain {
      .tokenDialogContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .box1 {
          display: flex;
          height: 30px;
          line-height: 24px;
          font-size: 24px;
          font-weight: bold;
          color: #4c4c4c;
          img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-left: 10px;
          }
        }
        .box2 {
          input {
            width: 528px;
            height: 58px;
            border-radius: 12px;
            border: 1px solid #36cdd9;
            outline: none;
            font-size: 18px;
            text-align: center;
            margin: 17px 0 23px 0;
          }
        }
      }
      .tokenName {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 13px;
        margin: 0 0 20px 0;
        .box1 {
          font-size: 18px;
          font-weight: bold;
          color: #4c4c4c;
        }
      }
      .tokenAll {
        display: flex;
        flex-direction: column;
        height: 600px;
        font-size: 18px;
        overflow-y: auto;
        font-weight: bold;
        color: #4c4c4c;
        padding: 0 13px;
        div:hover {
          cursor: pointer;
        }
        div {
          display: flex;
          height: 60px;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
      }

      .tokenAll::-webkit-scrollbar {
        width: 3px;
      }
      .tokenAll::-webkit-scrollbar-thumb {
        background: #d8d8d8;
        border-radius: 10px;
      }
      .tokenAll::-webkit-scrollbar-track-piece {
        background: transparent;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    .iframeBox {
      iframe {
        width: 100%;
        height: 90%;
      }
    }
    .content {
      margin: 40px 0 0 0;
      .tabs {
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
      .el-dialog__wrapper {
        .el-dialog {
          .el-dialog__header {
            .el-dialog__title {
              display: block;
              font-size: 12px;
              font-weight: bold;
              text-align: center;
            }
          }
        }
      }
      .el-dialog__body {
        padding: 10px 20px 20px 20px;
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
                width: 110px;
                height: 27px;
                font-size: 20px;
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
              font-size: 12px;
              .box4 {
                img {
                  height: 13px;
                  width: 15px;
                }
                span {
                  margin: 0px 5px 0 5px;
                }
              }
              .box6 {
                line-height: 20px;
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
          height: 14px;
          margin: 16px 0;
          line-height: 40px;
          .bottomBtn2 {
            line-height: 20px;
            img {
              margin: auto;
              width: 14px;
              height: 14px;
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
                width: 110px;
                height: 27px;
                font-size: 20px;
              }
            }
            .box3 {
              .chooseBox3 {
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
                .coinNameAndImg {
                  width: 73px;
                  height: 21px;
                  border-radius: 8px;
                  .img1 {
                    width: 15px;
                    height: 13px;
                  }
                  span {
                    margin: 0px 5px 0 5px;
                    font-size: 12px;
                  }
                  .img2 {
                    width: 11px;
                    height: 11px;
                  }
                }
              }
            }
          }
        }
        .poor {
          font-size: 11px;
          padding: 14px 22px 20px 22px;
        }
        .footerBtn {
          width: 100%;
          text-align: center;
          button {
            font-size: 14px;
            width: 295px;
            height: 35px;
          }
        }
      }
      .dialogContent {
        .box1 {
          font-size: 12px;
          margin: 0 0 10px 0;
          img {
            width: 12px;
            height: 12px;
            vertical-align: middle;
            margin: 0 0 2px 3px;
          }
        }
        .box2 {
          .box2_1 {
            width: 70px;
            height: 30px;
            line-height: 30px;
            margin-right: 2px;
            font-size: 12px;
            border-radius: 6px;
          }
          .box2_2 {
            width: 120px;
            height: 30px;
            input {
              width: 110px;
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              border-radius: 6px 0 0 6px;
            }
            span {
              height: 32px;
              line-height: 32px;
              font-size: 12px;
              background-color: #dbdada;
              border-radius: 0 6px 6px 0;
            }
          }
        }
        .box3 {
          font-size: 12px;
          font-weight: bold;
          color: #4c4c4c;
          margin: 8px 0 5px 0;
          img {
            width: 12px;
            height: 12px;
            vertical-align: middle;
            margin: 0 0 2px 3px;
          }
        }
        .box4 {
          font-size: 12px;
          color: #4c4c4c;
          font-weight: bold;
          input {
            width: 60px;
            height: 30px;
            line-height: 30px;
            background: #fffaf4;
            border-radius: 6px;
            border: none;
            outline: none;
          }
        }
      }
      .dialogMain {
        .tokenDialogContent {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box1 {
            display: flex;
            height: 15px;
            line-height: 12px;
            font-size: 12px;
            font-weight: bold;
            color: #4c4c4c;
            img {
              width: 12px;
              height: 12px;
              vertical-align: middle;
              margin-left: 5px;
            }
          }
          .box2 {
            input {
              width: 250px;
              height: 29px;
              border-radius: 6px;
              border: 1px solid #36cdd9;
              outline: none;
              font-size: 12px;
              text-align: center;
              margin: 8px 0 11px 0;
            }
          }
        }
        .tokenName {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 6px;
          margin: 0 0 10px 0;
          .box1 {
            font-size: 12px;
            font-weight: bold;
            color: #4c4c4c;
          }
        }
        .tokenAll {
          display: flex;
          flex-direction: column;
          height: 300px;
          font-size: 12px;
          overflow-y: auto;
          font-weight: bold;
          color: #4c4c4c;
          padding: 0 6px;
          div {
            display: flex;
            height: 30px;
            line-height: 16px;
            img {
              width: 15px;
              height: 15px;
              vertical-align: middle;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

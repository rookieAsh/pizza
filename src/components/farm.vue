<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <div class="titleMsg">农场</div>
        <p class="titleNav">筹集流动资金池（LP）代币以赚取收益</p>
      </div>
      <div class="mainContent">
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
            <button @click="handlePizdig()">选择</button>
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
            <button>选择</button>
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
            <button>选择</button>
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
            <button>选择</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  created() {},
  methods: {
    handlePizdig() {
      this.$router.push('/pizdig')
    }
  }
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
        margin: 20px 0;
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
          margin: 10px 0;
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

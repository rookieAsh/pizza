<template>
  <div class="container">
    <div class="titleMsg">城堡</div>
    <div class="titleNav">每日总产量1000000PIZ</div>
    <div class="content">
      <div class="left">
        <div class="leftImg">
          <img src="../assets/image/castle/img1.png" alt="" />
        </div>
        <div class="leftLevel">
          <div class="leftLevel1">我的等级：士兵</div>
          <div>主节点总质押市值：1000U</div>
          <div>分节总质押市值：100U</div>
          <div>个人质押市值：90U</div>
          <div>距升级还差：10U</div>
        </div>
        <button>质押</button>
      </div>
      <div class="right">
        <div class="rightTitle">质押业绩</div>
        <div>主节点业绩：2434PIZ</div>
        <div>分节点业绩：2434PIZ</div>
        <div>持币地址数：243个</div>
        <div>个人质押市值：24U</div>
        <div>个人质押市值：24U</div>
        <button>提取</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      }
      button {
        width: 195px;
        height: 58px;
        display: block;
        margin: auto;
        margin-top: 134px;
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
      }
    }
  }
}
</style>

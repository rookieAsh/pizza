<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <!-- <div class="title">{{ 9527 }}</div>
        <div class="spanMsg">这是什么</div> -->
        <div class="title">{{ $t("lang.name") }}</div>
        <div class="spanMsg">{{ $t("lang.message") }}</div>
        <div class="rightPhone">
          <img src="../assets/image/home/bigLogo.png" alt="" />
        </div>
        <div class="leftBtn">
          <button class="downBtn">
            <div class="downBtn1">
              <span>下载</span>
              <img src="../assets/image/home/img11.png" alt="" />
            </div>
          </button>
          <button>白皮书</button>
        </div>
        <div class="footerMsg">
          <div>官方消息</div>
          <div class="middle">|</div>
          <div class="footerNew">
            <div>
              <img src="../assets/image/home/img5.png" alt="" />
            </div>
            <div class="middle">
              <img src="../assets/image/home/img8.png" alt="" />
            </div>
            <div>
              <img src="../assets/image/home/img6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/image/home/bigLogo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "APP介绍APP介绍介绍"
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .left {
    width: 382px;
    height: 884px;
    .title {
      width: 382px;
      height: 134px;
      margin-top: 132px;
      margin-bottom: 30px;
      font-size: 48px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #333333;
    }
    .spanMsg {
      margin-top: 30px;
      margin-bottom: 86px;
      width: 191px;
      height: 45px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #333333;
    }
    .leftBtn button {
      width: 180px;
      height: 60px;
      line-height: 60px;
      border-radius: 35px;
      border: 1px solid #fd959b;
      outline: none;
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
      background-color: #fd959b;
      cursor: pointer;
    }
    .leftBtn {
      .downBtn {
        margin-right: 20px;
        .downBtn1 {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            margin-right: 5px;
          }
        }
      }
    }
    .footerMsg {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 213px;
      font-size: 20px;
      height: 32px;
      line-height: 32px;
      color: #666666;
      font-weight: bold;
      .middle {
        margin: 0 19px;
      }
      .footerNew {
        display: flex;
        flex-direction: row;
        .middle {
          margin: 0 19px;
        }
      }
    }
  }
  .right {
    width: 780px;
    height: 884px;
    margin-top: 20px;
  }
}
@media screen and (min-width: 767px) {
  .container {
    width: 100%;
    .content .left {
      .rightPhone {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
    .content {
      .left .rightPhone {
        display: show;
      }
      .right {
        display: none;
      }
      .left {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        .title {
          width: 190px;
          height: 67px;
          font-size: 24px;
          margin: 30px 0 0 0;
        }
        .spanMsg {
          width: 95px;
          height: 22px;
          font-size: 16px;
          margin: 0px 0 10px 0;
          color: #9b9b9b;
        }
        .leftBtn {
          margin: 17px 0 18px 0;
          button {
            width: 90px;
            height: 30px;
            line-height: 30px;
            border-radius: 18px;
            font-size: 12px;
            background-color: #1ec7d5;
            border: none;
            outline: none;
          }
          .downBtn1 img {
            width: 12px;
            height: 12px;
          }
        }
        .rightPhone img {
          width: 339px;
          height: 382px;
          margin-right: 20px;
        }
        .footerMsg {
          font-size: 10px;
          font-weight: bold;
          color: #666666;
          margin: 0;
          img {
            width: 16px;
            height: 16px;

            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>

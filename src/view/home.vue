<template>
  <el-container class="indexContainer">
    <el-aside :width="isCollapse ? '64px' : '280px'" class="aside">
      <div class="asideImg" v-show="!isCollapse">
        <img src="../assets/image/home/logo.png" />
        <div class="asideMark">PizzaSwap</div>
      </div>
      <div class="asideImg1" v-show="isCollapse"></div>
      <el-menu
        active-text-color="#4dbcff"
        unique-opened
        :default-active="this.$route.path"
        :collapse="isCollapse"
        :collapse-transition="false"
        router
        class="elmenu"
      >
        <template v-for="item in menulist">
          <el-submenu
            v-if="item.children.length !== 0"
            :index="'/' + item.path"
            :key="item.key"
            class="elsubmen"
          >
            <template slot="title">
              <img class="imgNav" :src="item.icon" />
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="(items, key) in item.children"
              :key="key"
              :index="'/' + items.path"
              class="elmenuitem"
              @click="handleClick(1111)"
            >
              <img class="imgNav" :src="items.icon" />
              <span>{{ items.authName }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :index="'/' + item.path"
            :key="item.key"
            class="elmenuitem"
          >
            <img class="imgNav" :src="item.icon" />
            <span>{{ item.authName }}</span>
          </el-menu-item>
        </template>
        <div class="invite" v-if="userState != 0">
          <img src="../assets/image/home/invite.png" alt="" />
          <span v-show="!isCollapse" @click="inviteBtn('copy1')">邀请链接</span>
        </div>
        <div
          class="yaoqing1"
          id="copy1"
          style="width: 100px; word-wrap: break-word"
        >
          http://pizswap.com/#/farm?{{ this.addressAll }}
        </div>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="headerBtn">
        <div class="headerContent">
          <div class="headerContent1">
            <div class="headerImg" v-show="isCollapse">
              <img src="../assets/image/home/logo.png" alt="" />
            </div>
            <div class="headerTitle" v-show="isCollapse">PizzaSwap</div>
            <div class="headerLeft" @click="isCollapseClick">
              <img
                v-if="!isCollapse"
                src="../assets/image/home/back.png"
                alt=""
              />
              <img
                v-if="isCollapse"
                src="../assets/image/home/back1.png"
                alt=""
              />
            </div>
          </div>
          <div class="headerRight">
            <div class="languageBtn">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link" v-if="$i18n.locale === 'zh'">
                  <img src="../assets/image/home/china.png" alt="" />中文<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'en'">
                  <img src="../assets/image/home/en.svg" alt="" />English<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'ru'">
                  <img src="../assets/image/home/russia.png" alt="" />русск<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'jap'">
                  <img src="../assets/image/home/japan.png" alt="" />日本語<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'sk'">
                  <img src="../assets/image/home/sk.png" alt="" />한국어<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh">
                    <img
                      src="../assets/image/home/china.png"
                      alt=""
                    />中文</el-dropdown-item
                  >
                  <el-dropdown-item command="en">
                    <img src="../assets/image/home/en.svg" alt="" />
                    English</el-dropdown-item
                  >
                  <el-dropdown-item command="ru">
                    <img src="../assets/image/home/russia.png" alt="" />
                    русск</el-dropdown-item
                  >
                  <el-dropdown-item command="jap">
                    <img src="../assets/image/home/japan.png" alt="" />
                    日本語</el-dropdown-item
                  >
                  <el-dropdown-item command="sk">
                    <img src="../assets/image/home/sk.png" alt="" />
                    한국어</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <button class="moneyBtn" v-if="address != ''">
              <span> {{ address }}</span>
            </button>
            <button
              class="moneyBtn"
              @click="hendleWalletBtn()"
              v-if="address == ''"
            >
              <span>连接钱包</span>
            </button>
          </div>
        </div>
      </el-header>
      <!-- 手机start -->
      <el-header class="headerBtnPhone">
        <div class="headerContent">
          <div class="headerContent1">
            <div class="headerLeft" @click="isCollapseClickPhone()">
              <img
                v-if="!isCollapsePhone"
                src="../assets/image/home/back.png"
                alt=""
              />
              <img
                v-if="isCollapsePhone"
                src="../assets/image/home/back1.png"
                alt=""
              />
            </div>
            <div class="headerImg">
              <img src="../assets/image/home/logo.png" alt="" />
            </div>
          </div>
          <div class="headerRight">
            <div class="languageBtn">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link" v-if="$i18n.locale === 'zh'">
                  <img src="../assets/image/home/china.png" alt="" />中文<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'en'">
                  <img src="../assets/image/home/en.svg" alt="" />English<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'ru'">
                  <img src="../assets/image/home/russia.png" alt="" />русск<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'jap'">
                  <img src="../assets/image/home/japan.png" alt="" />日本語<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'sk'">
                  <img src="../assets/image/home/sk.png" alt="" />한국어<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh">
                    <img
                      src="../assets/image/home/china.png"
                      alt=""
                    />中文</el-dropdown-item
                  >
                  <el-dropdown-item command="en">
                    <img src="../assets/image/home/en.svg" alt="" />
                    English</el-dropdown-item
                  >
                  <el-dropdown-item command="ru">
                    <img src="../assets/image/home/russia.png" alt="" />
                    русск</el-dropdown-item
                  >
                  <el-dropdown-item command="jap">
                    <img src="../assets/image/home/japan.png" alt="" />
                    日本語</el-dropdown-item
                  >
                  <el-dropdown-item command="sk">
                    <img src="../assets/image/home/sk.png" alt="" />
                    한국어</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <button class="moneyBtn" v-if="address">
              <span> {{ address }}</span>
            </button>
            <button class="moneyBtn" @click="hendleWalletBtn()" v-if="!address">
              <span>连接钱包</span>
            </button>
          </div>
        </div>
      </el-header>
      <!-- 手机end -->

      <!-- 手机start -->
      <el-aside width="100px" v-show="isCollapsePhone" class="asidePhone">
        <el-menu
          active-text-color="#4dbcff"
          unique-opened
          default-active="1"
          :collapse-transition="false"
          router
          class="elmenu"
        >
          <van-popup
            position="left"
            duration="0"
            v-model="isCollapsePhone"
            :style="{ height: '100%' }"
            class="vanPopup"
          >
            <template v-for="item in menulist">
              <el-submenu
                v-if="item.children.length !== 0"
                :key="item.key"
                :index="'/' + item.path"
                class="elsubmen"
              >
                <template slot="title">
                  <img class="imgNav" :src="item.icon" />
                  <span>{{ item.authName }}</span>
                </template>
                <el-menu-item
                  v-for="(items, key) in item.children"
                  :key="key"
                  :index="'/' + items.path"
                  class="elmenuitem"
                >
                  <span>{{ items.authName }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="'/' + item.path"
                :key="item.key"
                class="elmenuitem"
              >
                <img class="imgNav" :src="item.icon" />
                <span>{{ item.authName }}</span>
              </el-menu-item>
            </template>
            <div class="invite" v-if="userState != 0">
              <img src="../assets/image/home/invite.png" alt="" />
              <span v-show="!isCollapse" @click="inviteBtn2('copy2')"
                >邀请链接</span
              >
            </div>
            <div class="yaoqing1" id="copy2">
              http://192.168.2.5:8080/#/farm?{{ this.addressAll }}
            </div>
          </van-popup>
        </el-menu>
      </el-aside>
      <!-- 手机end -->

      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import fun from '../mixins/common.js'
import img1 from '../assets/image/home/img1.png'
import img2 from '../assets/image/home/img2.png'
import img3 from '../assets/image/home/img3.png'
import img4 from '../assets/image/home/img4.png'
import invite from '../assets/image/home/invite.png'
import { mapActions } from 'vuex'
export default {
  mixins: [fun],
  data() {
    return {
      userState: '',
      address: '',
      addressAll: '',
      show: false,
      drawer: false,
      direction: 'ltr',
      isCollapse: false,
      isCollapsePhone: false,
      menulist: [
        {
          authName: '家',
          id: 'family',
          path: 'family',
          key: 1,
          icon: img1,
          children: [],
        },
        {
          authName: '贸易',
          id: 'trade',
          path: 'trade',
          icon: img2,
          key: 3,
          children: [
            {
              authName: '兑换',
              id: 'trading',
              path: 'trading',
              key: 31,
            },
            // {
            //   authName: '流动性',
            //   id: 'liquidity',
            //   path: 'liquidity',
            //   key: 32,
            // },
          ],
        },
        {
          authName: '农场',
          id: 'farm',
          path: 'farm',
          icon: img3,
          key: 4,
          children: [],
        },
        {
          authName: '城堡',
          id: 'castle',
          path: 'castle',
          icon: img4,
          key: 5,
          children: [],
        },
        // {
        //   authName: '邀请链接',
        //   id: 'invite',
        //   path: 'invite',
        //   icon: invite,
        //   key: 6,
        //   children: [],
        // },
      ],
      addressCastle: this.$store.state.adsCastle, //城堡合约
      // 城堡合约地址abi
      abi: this.$store.state.abiCastle,
      // 定时器
      intervalId: null,
    }
  },
  created() {
    this.$store.commit('instance')
    this.hendleWalletBtn()
    // this.dataRefreh()
    this.getStatsMsg()
  },
  methods: {
    //定时器
    dataRefreh() {
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return
      }
      // 计时器为空，操作
      this.intervalId = setInterval(() => {
        this.hendleWalletBtn() //加载数据函数
        this.getStatsMsg()
      }, 3000)
    },
    // 停止定时器
    clear() {
      clearInterval(this.intervalId) //清除计时器
      this.intervalId = null //设置为null
    },
    isCollapseClick() {
      this.isCollapse = !this.isCollapse
    },
    isCollapseClickPhone() {
      this.isCollapsePhone = !this.isCollapsePhone
    },
    handleCommand(command) {
      this.$i18n.locale = command
    },
    async hendleWalletBtn() {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!')
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      console.log(accounts)
      this.addressAll = accounts[0]
      this.address = accounts[0].slice(0, 8) + '...'
    },
    handleClick(val) {
      console.log(val)
    },
    // 复制邀请链接
    invite(copy) {
      const range = document.createRange()
      range.selectNode(document.getElementById(copy))
      const selection = window.getSelection()
      if (selection.rangeCount > 0) selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      this.$message.success('复制成功')
    },
    inviteBtn(copy) {
      this.invite(copy)
    },
    inviteBtn2(copy) {
      this.invite(copy)
    },
    //获得用户ID
    async getStatsMsg() {
      const accounts = await this.getAccounts()
      const newAccounts = accounts[0]
      console.log('newAccounts', newAccounts)
      const contractInstance = this.contractWebEth(this.abi, this.addressCastle)
      const res = contractInstance.methods
        .getStats(newAccounts)
        .call()
        .then((res) => {
          this.userState = res.stats[0]
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
  },
  destroyed() {
    // 在页面销毁后，清除计时器
    this.clear()
  },
  // watch: {
  //   addressAll: {
  //     handler(newVal, objVal) {
  //       if (newVal != objVal) {
  //         this.$router.push('/family')
  //       }
  //     },
  //   },
  // },
}
</script>
<style lang="scss">
.indexContainer {
  height: 100%;
  .aside {
    height: 100%;
    background-image: url('../assets/image/home/bgc.png');
    background-repeat: no-repeat;
    .elmenu {
      background: rgba(0, 0, 0, 0) !important;
      .invite {
        height: 30px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 22px;
          height: 22px;
          margin: 0 10px 0 20px;
        }
        span {
          font-size: 19px;
        }
      }
      .invite:active {
        color: #5fbcfb;
      }
      .yaoqing1 {
        position: absolute;
        z-index: -1000;
      }
    }
    .elmenu .elmenuitem {
      font-size: 19px;
      background: rgba(0, 0, 0, 0) !important;
    }
    .elmenu .elsubmen .elmenuitem {
      font-size: 16px;
      background: linear-gradient(
        to right,
        #ffe9e3,
        #ffeabc,
        #ffceb6
      ) !important;
    }
    .elmenu .el-submenu__title {
      font-size: 19px;
      background: rgba(0, 0, 0, 0) !important;
    }
  }
  .asideImg {
    text-align: center;
    margin: 60px 58px 58px 48px;
    .img {
      width: 80px;
      height: 80px;
      display: block;
    }
    .asideMark {
      display: block;
      width: 163px;
      height: 45px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #333333;
      line-height: 45px;
    }
  }
  .asideImg1 {
    width: 150px;
    height: 247px;
  }
  .imgNav {
    margin-right: 10px;
  }
  .btn {
    margin: 10px;
  }
  .headerBtn .headerContent {
    height: 100%;
    .headerContent1 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .headerImg img {
        width: 48px;
        height: 48px;
      }
      .headerTitle {
        font-size: 20px;
        margin: 0 20px 0 10px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #333333;
      }
    }
  }
  .headerBtn .headerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .el-main {
    padding: 0;
    margin: 0;
    background-color: #faf9f8;
  }
  .headerBtn .headerLeft img {
    width: 32px;
    height: 32px;
  }
  .headerBtn {
    .headerContent {
      .headerRight {
        display: flex;
        flex-direction: row;
        .languageBtn {
          height: 40px;
          line-height: 40px;
          margin-right: 10px;
          .el-dropdown-selfdefine {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
          }
          img {
            width: 32px;
            height: 21px;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
        .moneyBtn {
          width: 122px;
          height: 40px;
          font-size: 18px;
          outline: none;
          color: #03535a;
          background-color: #1ec7d5;
          border-radius: 20px;
          opacity: 0.9;
          font-weight: 600;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
}
.el-dropdown-menu {
  .el-dropdown-menu__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    img {
      width: 32px;
      height: 21px;
      margin-right: 10px;
    }
  }
}

@media screen and (min-width: 767px) {
  .headerBtnPhone {
    display: none;
  }
  .headerBtn {
    height: 70px !important;
    border-bottom: 1px solid #efefef;
  }
}
@media screen and (max-width: 767px) {
  .headerBtnPhone {
    height: 40px !important;
    border-bottom: 1px solid #efefef;
    .headerRight {
      .languageBtn {
        .el-dropdown-selfdefine {
          font-size: 13px;
          font-weight: 500;
          color: #333333;
        }
        img {
          width: 16px;
          height: 11px;
          margin-right: 5px;
        }
      }
    }
  }
  .el-dropdown-menu {
    .el-dropdown-menu__item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 28px;
      font-size: 13px;
      padding: 0 8px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      img {
        width: 16px;
        height: 11px;
        margin-right: 5px;
      }
    }
  }
  .indexContainer {
    width: 100%;
    .aside {
      display: none;
    }
    .asidePhone {
      position: fixed;
      top: 40px;
      height: 100%;
      border: none;
      background-color: #fff;
      z-index: +1111;
      .elmenu {
        border: none;
        .van-overlay {
          position: fixed;
          top: 40px;
          background: #ec6869;
          opacity: 0.6;
        }
        .vanPopup {
          width: 200px;
          border: none;
          position: fixed;
          top: 373px;
          .invite {
            height: 30px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
              width: 16px;
              height: 16px;
              margin: 2px 8px 0 20px;
            }
            span {
              font-size: 14px;
            }
          }
          .invite:active {
            color: #5fbcfb;
          }
        }
        .imgNav {
          width: 16px;
          height: 16px;
          border: none;
        }
        .yaoqing1 {
          position: absolute;
          right: -111111111px;
          // color: red;
          z-index: -1000;
        }
      }
    }
    .headerBtn {
      display: none;
    }
    .headerBtnPhone {
      width: 100%;
      height: 40px;
      display: show;
      .headerContent {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .headerContent1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .headerImg img {
            width: 28px;
            height: 28px;
            margin-left: 10px;
            margin-top: 6px;
          }
          .headerLeft img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
          }
        }
      }
      .headerRight {
        display: flex;
        align-items: center;
        flex-direction: row;
        .languageBtn {
          margin-right: 20px;
          font-size: 12px;
        }
        .moneyBtn {
          width: 79px;
          height: 26px;
          font-size: 12px;
          outline: none;
          color: #03535a;
          background-color: #1ec7d5;
          border-radius: 16px;
          opacity: 0.9;
          font-weight: 600;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

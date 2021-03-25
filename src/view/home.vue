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
        default-active="1"
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
                  <img src="../assets/image/home/china.png" alt="" />CN<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'en'">
                  <img src="../assets/image/home/en.svg" alt="" />EN<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh">
                    <img
                      src="../assets/image/home/china.png"
                      alt=""
                    />CN</el-dropdown-item
                  >
                  <el-dropdown-item command="en">
                    <img src="../assets/image/home/en.svg" alt="" />
                    EN</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <button class="moneyBtn" @click="connectWallet()">连接钱包</button>
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
                  <img src="../assets/image/home/china.png" alt="" />CN<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <span class="el-dropdown-link" v-if="$i18n.locale === 'en'">
                  <img src="../assets/image/home/en.svg" alt="" />EN<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh">
                    <img
                      src="../assets/image/home/china.png"
                      alt=""
                    />CN</el-dropdown-item
                  >
                  <el-dropdown-item command="en">
                    <img src="../assets/image/home/en.svg" alt="" />
                    EN</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <button class="moneyBtn">连接钱包</button>
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
import img1 from '../assets/image/home/img1.png'
import img2 from '../assets/image/home/img2.png'
import img3 from '../assets/image/home/img3.png'
import img4 from '../assets/image/home/img4.png'
export default {
  data() {
    return {
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
          children: []
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
              key: 31
            },
            {
              authName: '流动性',
              id: 'liquidity',
              path: 'liquidity',
              key: 32
            }
          ]
        },
        {
          authName: '农场',
          id: 'farm',
          path: 'farm',
          icon: img3,
          key: 4,
          children: []
        },
        {
          authName: '城堡',
          id: 'castle',
          path: 'castle',
          icon: img4,
          key: 5,
          children: []
        }
      ]
    }
  },
  created() {
    this.$store.commit('instance')
  },
  methods: {
    isCollapseClick() {
      this.isCollapse = !this.isCollapse
    },
    isCollapseClickPhone() {
      this.isCollapsePhone = !this.isCollapsePhone
    },
    handleCommand(command) {
      this.$i18n.locale = command
      console.log(this.$i18n.locale)
    },

    connectWallet() {
      this.wallet = web3.eth.accounts.wallet
      console.log(this.wallet.defaultKeyName)
      web3.eth.getProtocolVersion().then(res => {
        console.log(res)
      })
    }
  }
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
          width: 100px;
          height: 40px;
          line-height: 40px;
          .el-dropdown-selfdefine {
            cursor: pointer;
            display: flex;
            justify-content: center;
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
    justify-content: center;
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
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
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
      justify-content: center;
      align-items: center;
      font-size: 13px;
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
        }
        .imgNav {
          width: 16px;
          height: 16px;
          border: none;
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

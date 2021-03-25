import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Element from "element-ui"
import axios from "axios"
import VueI18n from "vue-i18n"

import "element-ui/lib/theme-chalk/index.css"
import Web3 from "web3"
Vue.prototype.Web3 = Web3
    Vue.use(VueI18n)
    Vue.prototype.$http = axios

import Vant from "vant"
import "vant/lib/index.css"
Vue.use(Vant);

const i18n = new VueI18n({
  locale: "zh", // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    zh: require("./vueI18/zh"), // 中文语言包
    en: require("./vueI18/en") // 英文语言包
  }
});
Vue.use(Element);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")

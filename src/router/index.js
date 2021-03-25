import Vue from "vue";
import VueRouter from "vue-router";
import home from "../view/home.vue";
import farm from "../components/farm.vue";
import vote from "../components/vote.vue";
import castle from "../components/castle.vue";
import family from "../components/family.vue";
import trade from "../components/trade.vue";
import trading from "../components/trading.vue";
import liquidity from "../components/liquidity.vue";
import dialog from "../components/dialog.vue";
import pizdig from "../components/pizdig.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/family" },
  {
    path: "/home",
    component: home,
    redirect: "/family",
    children: [
      { path: "/family", component: family },
      { path: "/farm", component: farm },
      { path: "/pizdig", component: pizdig },
      { path: "/castle", component: castle },
      {
        path: "/trade",
        component: trade,
        redirect: "/trading",
        children: [
          { path: "/trading", component: trading },
          { path: "/liquidity", component: liquidity },
          { path: "/dialog", component: dialog }
        ]
      }

    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

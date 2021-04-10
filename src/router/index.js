import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../view/home.vue'
import farm from '../components/farm.vue'
import vote from '../components/vote.vue'
import castle from '../components/castle.vue'
import family from '../components/family.vue'
import trade from '../components/trade.vue'
import trading from '../components/trading.vue'
import liquidity from '../components/liquidity.vue'
import dialog from '../components/dialog.vue'
import pizdig from '../components/pizdig.vue'
import pizdig1 from '../components/pizdig1.vue'
import pizdig2 from '../components/pizdig2.vue'
import pizdig3 from '../components/pizdig3.vue'
import invite from '../components/invite.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/family' },
  {
    path: '/home',
    component: home,
    redirect: '/family',
    children: [
      { path: '/family', component: family },
      { path: '/farm', component: farm },
      { path: '/pizdig', component: pizdig },
      { path: '/pizdig1', component: pizdig1 },
      { path: '/pizdig2', component: pizdig2 },
      { path: '/pizdig3', component: pizdig3 },
      { path: '/castle', component: castle },
      {
        path: '/trade',
        component: trade,
        redirect: '/trading',
        children: [
          { path: '/trading', component: trading },
          { path: '/liquidity', component: liquidity },
          { path: '/dialog', component: dialog },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router

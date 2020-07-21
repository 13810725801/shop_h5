import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodDetails from '@/views/shops/good_details'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wait_to_shouquan',
      name: 'wait_to_shouquan',
      component: require('../views/wait_to_shouquan.vue')
    },
    {
      path: '/shops/goods_details',
      name: 'GoodDetails',
      component: GoodDetails
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

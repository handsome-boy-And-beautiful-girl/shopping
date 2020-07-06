import Vue from 'vue'
import Router from 'vue-router'

const index = ()=>import('../pages/index.vue')
const cart = ()=>import('../pages/cart.vue')
const center = ()=>import('../pages/center.vue')
const login = () =>import('../pages/login.vue')
const Aindex = () =>import('../pages/AIndex.vue')
const Register = () => import('../pages/register.vue')
const shopList = () => import('../pages/shopList.vue')
const user = () => import('../pages/user.vue')
const order = () => import('../pages/order.vue')
const Recommend = () => import('../pages/Recommend.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'index',
      component: index
    },
    {
      path:'/cart',
      name: '购物车',
      component: cart
    },
    {
      path:'/center',
      name: '个人中心',
      component: center
    },
    {
      path:'/Aindex',
      name: '管理员首页',
      component: Aindex,
      children: [
        {
          path:'/shopList',
          name: '商品管理',
          component: shopList
        },
        {
          path:'/user',
          name: '用户管理',
          component: user
        },
        {
          path:'/order',
          name: '订单管理',
          component: order
        },{
          path:'/recommend',
          name: '商品推荐管理',
          component:  Recommend
        }
      ]
    },
    {
      path:'/login',
      name: '管理员登录',
      component: login
    },
    {
      path:'/register',
      name: '用户注册',
      component: Register
    }
  ]
})

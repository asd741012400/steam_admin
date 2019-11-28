import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
    name: 'layout',
    component: resolve => require(['./views/layout/index.vue'], resolve),
    redirect: '/Login',
    children: [
      //白名单列表
      {
        path: '/WhiteList',
        name: 'WhiteList',
        component: resolve => require(['./views/business/RecycleManagement/WhiteList.vue'], resolve),
        meta: {
          title: '白名单列表'
        }
      },
      //回收价规则设置
      {
        path: '/RecycleSet',
        name: 'RecycleSet',
        component: resolve => require(['./views/business/RecycleManagement/RecycleSet.vue'], resolve),
        meta: {
          title: '回收价规则设置'
        }
      },
      //回收订单
      {
        path: '/RecycleOrder',
        name: 'RecycleOrder',
        component: resolve => require(['./views/business/RecycleManagement/RecycleOrder.vue'], resolve),
        meta: {
          title: '回收订单'
        }
      },
      //回收饰品管理
      {
        path: '/RecycleAccessories',
        name: 'RecycleAccessories',
        component: resolve => require(['./views/business/RecycleManagement/RecycleAccessories.vue'], resolve),
        meta: {
          title: '回收饰品管理'
        }
      },
      //打款管理
      {
        path: '/Remit',
        name: 'Remit',
        component: resolve => require(['./views/business/RecycleManagement/Remit.vue'], resolve),
        meta: {
          title: '打款管理'
        }
      },
      //库存管理
      {
        path: '/Inventory',
        name: 'Inventory',
        component: resolve => require(['./views/business/RecycleManagement/Inventory.vue'], resolve),
        meta: {
          title: '库存管理'
        }
      },
      //汇率
      {
        path: '/ExchangeRate',
        name: 'ExchangeRate',
        component: resolve => require(['./views/business/RecycleManagement/ExchangeRate.vue'], resolve),
        meta: {
          title: '汇率'
        }
      },
      //用户列表
      {
        path: '/UserList',
        name: 'UserList',
        component: resolve => require(['./views/business/UserManagement/UserList.vue'], resolve),
        meta: {
          title: '用户列表'
        }
      },
      //机器人steam帐号管理
      {
        path: '/RobotUser',
        name: 'RobotUser',
        component: resolve => require(['./views/business/RobotManagement/RobotUser.vue'], resolve),
        meta: {
          title: '机器人steam帐号管理'
        }
      },
      //库存客户端管理
      {
        path: '/InventoryClient',
        name: 'InventoryClient',
        component: resolve => require(['./views/business/RobotManagement/InventoryClient.vue'], resolve),
        meta: {
          title: '库存客户端管理'
        }
      },
      //回收报价管理
      {
        path: '/RecycleQuote',
        name: 'RecycleQuote',
        component: resolve => require(['./views/business/RobotManagement/RecycleQuote.vue'], resolve),
        meta: {
          title: '回收报价管理'
        }
      },
      //确认交易报价
      {
        path: '/AffirmDeal',
        name: 'AffirmDeal',
        component: resolve => require(['./views/business/RobotManagement/AffirmDeal.vue'], resolve),
        meta: {
          title: '确认交易报价'
        }
      },
      //角色管理
      {
        path: '/RoleManagement',
        name: 'RoleManagement',
        component: resolve => require(['./views/business/Jurisdiction/RoleManagement.vue'], resolve),
        meta: {
          title: '角色管理'
        }
      },
      //用户管理
      {
        path: '/UserManagement',
        name: 'UserManagement',
        component: resolve => require(['./views/business/Jurisdiction/UserManagement.vue'], resolve),
        meta: {
          title: '用户管理'
        }
      },
    ]
  },  
  {
    path: '/Login',
    name: 'Login',
    component: () => import( './views/Login/Login.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

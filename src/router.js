import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
    name: 'layout',
    component: resolve => require(['./views/layout/index.vue'], resolve),
    redirect: '/Login',
    children: [
      //首页
      {
        path: '/Home',
        name: 'Home',
        component: resolve => require(['./views/business/Home/Index.vue'], resolve),
        meta: {
          title: '主页'
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

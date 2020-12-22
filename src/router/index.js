import Vue from 'vue'//导入vue
import VueRouter from 'vue-router'// 导入vue路由
const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/cart')
const Profile = ()=>import('../views/profile/Profile')
Vue.use(VueRouter)//安装插件
//创建路由对象
const routes = [
    // 这里是一进入页面默认显示的主页
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'//浏览器里显示的地址改为history模式
})
export default router//导出router

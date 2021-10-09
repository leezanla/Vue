//配置路由相关的信息
import VueRouter from "vue-router";
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建一个router对象
//2.1定义路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/',
        redirect: '/home/news'
      },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage,
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于',
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户',
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'profile',
    },
  }
]
const router = new VueRouter({
  //2.2配置路由和组件之间的应用关系
  routes: routes,
  mode: 'history',
});
router.beforeEach(function(to, from, next) {
  document.title = to.matched[0].meta.title,
  next()
})
//3.将router对象传入到vue实例当中
export default router;


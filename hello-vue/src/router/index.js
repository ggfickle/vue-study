import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import Profile from "../views/user/Profile";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)


export default new VueRouter({
  //路由有两种模式：
  // hash: 路径带#符号
  // history：路径不带#符号
  mode: "history",
  routes: [
    {
      name:'main',
      path: '/main/:name',
      props: true,
      component: Main,
      //嵌套路由
      children: [
        {
          name: 'userProfile',
          //参数传递1：
          path: '/user/profile/:id',
          component: Profile
        },
        {
          name: 'userList',
          path: '/user/list/:id',
          component: List,
          //参数传递2：使用prop解耦 的方式
          props: true
        },
        {
          name: 'gohome',
          path: '/goHome',
          redirect: '/main'
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

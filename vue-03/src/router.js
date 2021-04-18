import Vue from 'vue'
import VueRouter from 'vue-router'
import content from "./components/content";
import main from "./components/main";

//安装路由
Vue.use(VueRouter)

//配置到处路由
export default new VueRouter({
    routes: [
        {
            //路由的名字
            name: 'content',
            //    请求发送过来的跳转路径
            path: '/content',
            //    跳转的组件
            component: content
        },
        {
            //路由的名字
            name: 'main',
            //    请求发送过来的跳转路径
            path: '/main',
            //    跳转的组件
            component: main
        }
    ]

});
// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import app from './App.vue'

//按需导入mint-ui的组件header
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入router.js路由模块
import router from './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
 //设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
//导入时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})

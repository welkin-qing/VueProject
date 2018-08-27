// 入口文件
console.log('OK')
import Vue from 'vue'
import app from './App.vue'

//按需导入mint-ui的组件header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入mui
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})

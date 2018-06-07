import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store' // vuex
import '../src/assets/css/weui.css'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$store = store

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly

App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/photo/main',
      'pages/about/main',
      'pages/contact/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      'list': [
        {
          'pagePath': 'pages/index/main',
          'iconPath': 'static/icons/index.png',
          'selectedIconPath': 'static/icons/index-active.png',
          'text': '首页'
        },
        {
          'pagePath': 'pages/photo/main',
          'iconPath': 'static/icons/photo.png',
          'selectedIconPath': 'static/icons/photo-active.png',
          'text': '照片'
        },
        {
          'pagePath': 'pages/about/main',
          'iconPath': 'static/icons/about.png',
          'selectedIconPath': 'static/icons/about-active.png',
          'text': '关于我们'
        },
        {
          'pagePath': 'pages/contact/main',
          'iconPath': 'static/icons/contact.png',
          'selectedIconPath': 'static/icons/contact-active.png',
          'text': '联系我们'
        }
      ]
    }
  }
}

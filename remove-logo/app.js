// app.js
import {silentLogin} from './utils/login'
App({
  onLaunch() {

    // 登录
    silentLogin()
  },
  globalData: {
    userInfo: null
  }
})

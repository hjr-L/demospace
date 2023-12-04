// app.js
import {
  silentLogin
} from './utils/login'
App({
  globalData: {
    userInfo: null,
    navHeight: 0,
    barHeight: 0,
    ios: true,
    safeAreaTop: 0,
    navlLeftWidth: 0,
    navInnerPaddingRight: 0,
    shareId: '' //通过分享页面进入的分享id
  },
  onLaunch(options) {
    const {
      query
    } = options;
    if (query.shareId) this.globalData.shareId = query.shareId
    // 静默登录
    silentLogin();
    // 设备相关信息
    const rect = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({
      success: (res) => {
        const isAndroid = res.platform === 'android'
        const isDevtools = res.platform === 'devtools'
        let statusBarHeight = res.statusBarHeight // 设备顶部标签栏信息
        let navHeight
        if (rect) {
          let navTop = rect.top // 胶囊按钮与顶部的距离
          navHeight = statusBarHeight + rect.height + (navTop - statusBarHeight) * 3 // 导航高度
        } else {
          navHeight = statusBarHeight + 51
        }
        this.globalData.ios = !isAndroid;
        this.globalData.navHeight = navHeight;
        this.globalData.navInnerPaddingRight = `padding-right: ${res.windowWidth - rect.left}px`;
        this.globalData.navlLeftWidth = `width: ${res.windowWidth - rect.left }px`;
        this.globalData.safeAreaTop = isDevtools || isAndroid ? `height: calc(var(--height) + ${res.safeArea.top}px); padding-top: ${res.safeArea.top}px` : ``;
      }
    })

  },
  onShow(){
    this.sharePageConfig()
  },
  // 页面全局分享设置
  sharePageConfig: function () {
    var PageTmp = Page
    Page = function (pageConfig) {
      //1. 获取当前页面路由
      let routerUrl = ""
      wx.onAppRoute(function (res) {
        let pages = getCurrentPages(),
          view = pages[pages.length - 1];
        routerUrl = view.route
      })
      //2. 全局开启分享配置
      pageConfig = Object.assign({
        onShareAppMessage: function () {
          //根据不同路由设置不同分享内容（微信小程序分享自带参数，如非特例，不需配置分享路径）
          let shareInfo = {}
          console.log('配置页面路由', routerUrl)
          //目前发现这里的变量只能用App外定义的全局的，或者缓存~~~~
          shareInfo = {
            title: "邀您体验",
            // imageUrl: shareUrl,
            path: '/' + routerUrl,
          }
          return shareInfo
        }
      }, pageConfig);
      // 配置页面模板
      PageTmp(pageConfig);
    }
  },
})
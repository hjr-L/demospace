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

    }
})
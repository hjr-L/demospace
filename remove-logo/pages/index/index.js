var shareBehavior = require('../../mixins/shareBehavior')
import apis from '../../apis/index'
Page({
    behaviors: [shareBehavior],
    data: {
        userInfo: {
            avatarUrl: '',
            nickName: '',
        },
        hasUserInfo: false,
        canIUseGetUserProfile: wx.canIUse('getUserProfile'),
        canIUseNicknameComp: wx.canIUse('input.type.nickname'),
        bannerList: [1, 2, 3],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        workList: [{
                text: '解析记录',
                subText: "描述123123",
                icon: '',
                bgColor: '',
                path: 'pages/analysis/analysis'
            },
            {
                text: '邀请记录',
                subText: "描述123123",
                icon: '',
                bgColor: '',
                path: 'pages/invitation/invitation'
            },
            {
                text: '解析教程',
                subText: "描述123123",
                icon: '',
                bgColor: '',
                path: ''
            },
            {
                text: '批量教程',
                subText: "描述123123",
                icon: '',
                bgColor: '',
                path: ''
            },
        ],
        inputLink: ''

    },
    onShow() {
        if (typeof this.getTabBar === 'function') {
            this.getTabBar((tabBar) => {
                tabBar.setData({
                    selected: 0
                })
            })
        }
    },
    onLoad(options) {
        // console.log(options,'---------');
    },
    clickPaste() {
        wx.getClipboardData(res => {
            console.log(res);
        })
    },
    bindKeyInput(e) {
        this.setData({
            inputLink: e.detail.value
        })
    },
    async clickAnalysis() {
        if (!this.data.inputLink) return
        try {
            const result = await apis.operate.analysis({
                url: this.data.inputLink
            })
            if (result.video) {
                // 解析成功
            }
        } catch (error) {
            wx.showToast({
                title: error.message || '失败',
                icon: 'none'
            })
        }
    }
})
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
                icon: 'icon-liebiaoxingshi',
                bgColor: '',
                path: 'pages/analysis/analysis'
            },
            {
                text: '邀请记录',
                subText: "描述123123",
                icon: 'icon-yaoqing',
                bgColor: '',
                path: 'pages/invitation/invitation'
            },
            {
                text: '解析教程',
                subText: "描述123123",
                icon: 'icon-Union-3',
                bgColor: '',
                path: ''
            },
            // {
            //     text: '批量教程',
            //     subText: "描述123123",
            //     icon: '',
            //     bgColor: '',
            //     path: ''
            // },
        ],
        inputLink: '',
        analysisUrl: '', //视频解析
        analysisImages: [
            'https://p95-bj-sign.douyinpic.com/tos-cn-i-0813/o89BNA7AASAIeAjlpEDeDIAXECMbMAtcMgnQAJ~tplv-dy-aweme-images:q75.jpeg?x-expires=1703138400&x-signature=BqukoGTcRS6KNLuf5zvapkBdUro%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=20231121145245FCAF834BB6B386050248',
            'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
        ], //图片解析

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
        wx.getClipboardData({
            success: res => {
                let link = res.data;
                this.setData({
                    inputLink: link
                })
            }
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
                this.setData({
                    analysisUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
                    analysisImages: []
                    // analysisUrl: result.video
                })
            }else if(result.images){
                this.setData({
                    analysisUrl: '',
                    analysisImages: result.images
                })
            }
        } catch (error) {
            wx.showToast({
                title: error.message || '失败',
                icon: 'none'
            })
        }
    },
    async download(e) {
        const dataset = e.target.dataset
        wx.showLoading({
            title: '下载中...',
            mask: true
        })
        const df = wx.downloadFile({
            url: dataset.url,
            success: res => {
                console.log(res);
            },
            fail: err => {
                console.log(err);
                wx.hideLoading()
            }
        })
        df.onProgressUpdate((res) => {
            console.log('下载进度', res.progress)
            console.log('已经下载的数据长度', res.totalBytesWritten)
            console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
        })
        // df.abort() // 取消下载任务
    }
})
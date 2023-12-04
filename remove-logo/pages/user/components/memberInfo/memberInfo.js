Component({
    options: {
        styleIsolation: "apply-shared"
    },

    /**
     * 组件的属性列表
     */
    properties: {

    },
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChooseAvatar(e) {
            const {
                avatarUrl
            } = e.detail
            const {
                nickName
            } = this.data.userInfo
            this.setData({
                "userInfo.avatarUrl": avatarUrl,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
        onInputChange(e) {
            const nickName = e.detail.value
            const {
                avatarUrl
            } = this.data.userInfo
            this.setData({
                "userInfo.nickName": nickName,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
        getUserProfile(e) {
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
                desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res)
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    }
})
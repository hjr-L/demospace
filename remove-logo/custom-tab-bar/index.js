Component({
    options: {
        styleIsolation: "apply-shared"
    },
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/pages/index/index",
            icon: "icon-shouye",
            selectedIcon: "icon-shouyefill",
            text: "首页"
        }, {
            pagePath: "/pages/user/user",
            icon: "icon-yonghu",
            selectedIcon: "icon-yonghufill",
            text: "用户"
        }]
    },
    attached() {},
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({
                url,
            })
        }
    }
})
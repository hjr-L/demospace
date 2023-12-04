// pages/user/user.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navHeight: app.globalData.navHeight,
        showRegister: false,
        operateList: [{
            text: '转换记录',
            icon: 'icon-liebiaoxingshi',
            path: '/pages/analysis/analysis'
        },{
            text: '邀请记录',
            icon: 'icon-yaoqing',
            path: '/pages/invitation/invitation'
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function') {
            this.getTabBar((tabBar) => {
                tabBar.setData({
                    selected: 1
                })
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    showRegister() {
        this.setData({
            showRegister: true
        })
    },
    goto(e){
      const path = e.currentTarget.dataset.path;
      wx.navigateTo({
        url: path,
        fail:(err)=>console.log(err)
      })
    }
})
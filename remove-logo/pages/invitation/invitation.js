// pages/invitation/invitation.js
import apis from '../../apis/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        page: 0,
        size: 10
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
        this.invitationList(true)
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
        ++this.data.page
        invitationList(false)
    },
    async invitationList(refresh=false) {
        try {
            const result = await apis.user.invitationList({
                page: this.data.page,
                size: this.data.size
            })
            let list = refresh ? [] : this.data.list
            list = list.concat(res.data)
            this.setData({
                list
            })
        } catch (error) {
            wx.showToast({
                title: error.message || '失败',
            })
        }
    }
})
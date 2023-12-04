import apis from '../../apis/index'

// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    info: {}
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
    this.getInfo()
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
  chooseAvatar(e) {
    console.log(e);
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  async getInfo() {
    try {
      const info = await apis.user.getInfo()
      this.setData({
        info
      })
    } catch (error) {
      wx.showToast({
        title: '错误',
        icon: 'none'
      })
    }
  }
})
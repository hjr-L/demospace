// pages/analysis/analysis.js
import apis from '../../apis/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    size: 10,
    stopLoad: false
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
    this.data.page = 0
    this.analysisList(true)
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
    this.data.page = 0
    this.analysisList(true)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    ++this.data.page
    this.analysisList(false);
  },

  async analysisList(refresh = false) {
    try {
      if(!refresh && this.data.stopLoad) return
      const result = await apis.user.analysisList({
        page: this.data.page,
        size: this.data.size
      })
      let list = refresh ? [] : this.data.list;
      list = list.concat(result.data)
      this.setData({
        list,
        stopLoad: list.length == result.data.total
      })
    } catch (error) {
      wx.showToast({
        title: error.message || '失败',
        icon: 'none'
      })
    }
  }

})
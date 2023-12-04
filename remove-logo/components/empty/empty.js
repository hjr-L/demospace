// components/empty/empty.js
const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '暂无记录'
    },
    btnText: {
      type: String,
      value: ''
    },
    btnType: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickBtn() {
      this.triggerEvent('emptyClick')
    }
  },
  onShareAppMessage: function (res) {
    let path = '/pages/index/index?shareId='+ app.globalData.userInfo?.id
    return {
      title: '邀您体验',
      path: path,
      // imageUrl: this.data.imageUrl
    }
  }
})
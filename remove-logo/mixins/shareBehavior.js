module.exports = Behavior({
    methods: {
        onShareAppMessage: function () {
            const shareId = wx.getStorageSync('shareId');
            return {
                title: '啦啦啦',
                path: '/pages/index/index?shareId='+shareId,
            }
        }
    }
})
// pages/user/components/register/register.js
import apis from '../../apis/index'
import {
    silentLogin
} from './utils/login'
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        mobile: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        async submit() {
            try {
                await apis.user.register({mobile: this.data.mobile});
                silentLogin();
            } catch (error) {
                wx.showToast({
                  title: error.message || '失败',
                })
            }
        },
        // input(e) {
        //     this.setData({
        //         mobile: e.mobile.value
        //     })
        // }
    }
})
const baseUrl = 'https://amano.vaiwan.com';
let count = 0;

function loading() {
    if (count == 0) {
        wx.showLoading({
            title: '加载中',
        })
    }
    count++;
}

function hideLoading() {
    count--;
    if (count <= 0) {
        wx.hideLoading()
    }
}

function request(option) {
    return new Promise((resolve, reject) => {
        const {
            url,
            data,
            method,
            config
        } = option;
        config.loading && loading();
        let requestOption = {
            url: baseUrl + url,
            dataType: 'json',
            method,
            timeout: 5 * 1000,
            data,
            ...config,
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            },
            complete: hideLoading
        }
        const token = wx.getStorageSync('token');
        if(token) requestOption.header.Authorization = token;
        wx.request(requestOption);
    })
}

export default request
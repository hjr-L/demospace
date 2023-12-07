import apis from '../apis/index';
let count = 1

function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: async (res) => {
        if (res.code) {
          try {
            // const result = await apis.user.login({code: res.code})
            // resolve(result)
            const shareId = getApp().globalData.shareId;
            console.log(getApp().globalData);
            resolve()
          } catch (error) {
            reject(error)
          }
        } else {
          reject('登陆失败')
        }
      },
      fail: reject
    })
  })
}

function register(params) {
  return new Promise((resolve, reject) => {
    // 注册
    getApp().globalData.userInfo = params
    // silentLogin()
    resolve()
  })
}

function getPasteNum() {
  return new Promise((resolve, reject)=>{
    resolve()
  })
}

async function silentLogin() {
  try {
    count--;
    const data = await login();
    // ...
    getApp().globalData.userInfo = data;
    wx.setStorageSync('shareId', 123)
    wx.setStorageSync('token', data?.token)
    return Promise.resolve();
  } catch (error) {
    if (count <= 0) {
      return Promise.reject(error)
    } else {
      silentLogin()
    }
  }
}

module.exports = {
  silentLogin,
  register
}
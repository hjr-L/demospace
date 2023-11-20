import apis from '../apis/index';
let count = 1
function login(){
    return new Promise((resolve,reject)=>{
            wx.login({
              success: async (res) => {
                if(res.code){
                    try {
                        const result = await apis.user.login({code: res.code})
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                }else{
                    reject('登陆失败')
                }
              },
              fail: reject
            })
    })

}

async function silentLogin(){
    try {
        count--;
        const data = await login();
        // ...
        wx.setStorageSync('token', data.token)
        return Promise.resolve();
    } catch (error) {
        if(count<=0){
            return Promise.reject(error)
        }else{
            silentLogin()
        }
    }
}

module.exports = {
    silentLogin
}
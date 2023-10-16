import urlUtil from './url';
export const navigatorTo = (url,params)=>{
    return new Promise((resolve,reject)=>{
        uni.navigateTo({
            url,
            success: resolve,
            fail: reject
        })
    })
}
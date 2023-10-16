const request = (method, url, data, config) => {
  return new Promise((resolve, reject) => {
    const baseUrl = process.env.BASE_URL;
    const reqOption = {
      url: baseUrl + url,
      method,
      data: {},
      // timeout: 5 * 1000,
      header: {},
      ...config,
    };
    const token = uni.getStorageSync("token");
    if (token) reqOption.header.token = token;
    if(!config?.hideLoading){
        uni.showLoading({
            title: '加载中...'
        });
    }
    uni.request({
      ...reqOptin,
      success: (res) => {
        if (res.statusCode && res.statusCode != 200) {
          uni.showToast({
            title: "api错误" + res.errMsg,
            icon: "none",
          });
          return;
        }
        resolve(res.data);
      },
      fail: (error) => {
        uni.showToast({
          title: "" + e.data.msg,
          icon: "none",
        });
        resolve(error);
      },
      complete() {
        //隐藏加载
        if (!config?.hideLoading) {
          uni.hideLoading();
        }
        resolve();
        return;
      },
    });
  });
};

/**
 config={
    responseType: text||arraybuffer
    ...
 }
 */

export const POST = (url, data, config) => request("POST", url, data, config);

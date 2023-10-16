export default{
    wxLogin() {
        return new Promise((resolve, reject) => {
            uni.login({
                success(res) {
                    cacheService.setData(WX_LOGIN_CODE, res.code || '');
                    console.log('wxLogin', res);
                    resolve(res);
                },
                fail: reject,
            });
        });
    }
}
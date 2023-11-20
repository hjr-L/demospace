import request from '../../utils/request'
module.exports = {
    login: (data) => {
        return request({
            url: '/login',
            method: 'post',
            data,
            config: {
                loading: true
            }
        })
    }
}
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
    },
    register: (data) => {
        return request({
            url: '/register',
            method: 'post',
            data,
            config: {
                loading: true
            }
        })
    },
    invitationList: (data) => {
        return request({
            url: '/invitation',
            method: 'get',
            data,
            config: {
                loading: true
            }
        })
    },
    analysisList: (data) => {
        return request({
            url: '/analysis/list',
            method: 'get',
            data,
            config: {
                loading: true
            }
        })
    },
}
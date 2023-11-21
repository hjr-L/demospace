import request from '../../utils/request'

module.exports = {
    analysis: (data) => {
        return Promise.resolve({
            "retCode": 200,
            "retDesc": "\u6210\u529f",
            "data": {
                "video": "http:\/\/v26-default.365yg.com\/c2ac89366ee31802aaabee0edc041968\/655c61f7\/video\/tos\/cn\/tos-cn-ve-15c001-alinc2\/o0l8SBCeI87akeqrUbLbaEUPKY4rfn0zNJDAAB\/?a=2011&ch=0&cr=0&dr=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=640&bt=640&cs=0&ds=4&ft=rkG4k0071FOvWHhWH6xRfFZJpYBO55Fel7Hz7tG&mime_type=video_mp4&qs=0&rc=OzdkaDxpPDU2OTpmZzRkM0BpMzh5aTU6ZmRkbjMzNGkzM0AvLzA0NWJiNjIxMDI0L2IxYSM2cXBvcjRvY2FgLS1kLWFzcw%3D%3D&btag=e00008000&dy_q=1700549600&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&l=20231121145320D64074B39F8A4E0550C6",
                "cover": "https:\/\/p3-sign.douyinpic.com\/tos-cn-i-0813\/owmGnbImAD7NIaqUiAlgeCFaEa9qAAf8AAbAzY~tplv-dy-resize-origshort-autoq-75:0.jpeg?x-expires=1701756000&x-signature=lrGallrvQILhu0bizFiucRNVkA8%3D&from=3213915784_large&s=PackSourceEnum_YUMME_DETAIL&se=false&sc=cover&biz_tag=aweme_video&l=20231121145320D431A755A4848F056619",
                "desc": "%E5%89%8D%E5%A5%8F%E4%B8%80%E5%93%8D%EF%BC%8C%E5%88%9D%E6%81%8B%E7%99%BB%E5%9C%BA%23%E7%94%9C%E5%A6%B9",
                "music": null
            },
            "succ": true
        })
        // return request({
        //     url: '/analysis',
        //     method: 'post',
        //     data,
        //     config: {
        //         loading: true
        //     }
        // })
    },
}
//引入express
const express = require('express');
//监听的端口
const port = 8848;
const app = express();
//引入os
const os = require('os');
//获取本机ipv4地址
function getIPv4() {
    //同一接口可能有不止一个IP4v地址，所以用数组存
    let ipv4s = [];
    //获取网络接口列表对象
    let interfaces = os.networkInterfaces();
    Object.keys(interfaces).forEach(function (key) {
        interfaces[key].forEach(function (item) {
            //跳过IPv6 和 '127.0.0.1'
            if ('IPv4' !== item.family || item.internal !== false) return;
            ipv4s.push(item.address); //可用的ipv4s加入数组
            // console.log(key + '--' + item.address);
        })
    })
    return ipv4s[0]; //返回一个可用的即可
}
let ipv4 = getIPv4();
//设置静态文件路径
app.use(express.static('/Users/hjr/Desktop/workspace/report_app/dist'));
//监听端口
// module.exports = 
app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log('Listening at http://localhost:' + port + '\n' + 'or at http://' + ipv4 + ':' + port)
    }
})

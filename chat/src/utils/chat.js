export default (messages) => {
    return new Promise((resolve,reject)=>{
        uni.request({
            method: 'post',
            data: {messages},
            url: 'http://127.0.0.1:3000/chat',
            success(result){
                if(result.data && result.data.code == 0){
                    resolve(result.data.content);
                }else{
                    reject(result.data.msg)
                }
            },
            fail(error){
                reject(error)
            }
        })
    })
}
class UrlUtil {
    stringUrlParams(url,params={}){
        let paramsString = ''
        if(params){
            paramsString = Object.keys(params).map(item => `${item}=${params[item]}`).join(',')
        }
        if(url.indexof('?')==-1) url = url+'?'
        return url+paramsString;
    }
}

export default new UrlUtil();
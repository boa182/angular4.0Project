import {RequestMethod, RequestOptions, URLSearchParams} from '@angular/http';

let baseUrl = 'http://10.3.136.252:3000/';

function getUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get: (http, api, params = {}) => {
            console.log(http,api);
        return new Promise((resolve, reject) => {
            // http.get(getUrl(api)).subscribe((res) => {
            //     resolve(res.json());
            // })
            params['_'] = Math.random();
            http.request(getUrl(api), new RequestOptions({
                method: RequestMethod.Get,
                search: params
            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
    }
    /*
    post: (http, api, params = {}) => {
        return new Promise((resolve, reject) => {
            params['_'] = Math.random();
            http.request(getUrl(api), new RequestOptions({
                method: RequestMethod.Post,
                body: params,
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
    }
    */
    post:(api, params = {})=>{
            console.log(api);
        return new Promise((resolve, reject) => {
            
            //拼接请求参数
            let urlSearchParams = new URLSearchParams();
            for(let key in params){
                urlSearchParams.append(key, params[key]);
            }
            //把参数先转成字符串
            let param = urlSearchParams.toString();
            //请求头
            let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
            this.http.post(this.getUrl(api), params, {headers: headers}).toPromise().then( res=> {
                resolve(res.json());
            })
        })
    }

    
}
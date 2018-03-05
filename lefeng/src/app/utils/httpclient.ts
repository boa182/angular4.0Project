//第2步配置httpclient
import {RequestMethod, RequestOptions} from '@angular/http';

let baseUrl = 'http://10.3.136.140:3000/';

function getUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get: (http, api, params = {}) => {
        return new Promise((resolve, reject) => {
            //每一次get请求都会加上一个随机参数，目的是为了自动刷新清空缓存
            params['_'] = Math.random();
            http.request(getUrl(api), new RequestOptions({
                method: RequestMethod.Get,
                search: params
            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
  	}
//	post: (http, api, params = {}) => {
//      return new Promise((resolve, reject) => {
//          
//          params['_'] = Math.random();
//          http.request(getUrl(api), new RequestOptions({
//              method: RequestMethod.Post,
//              body: params,
//              headers: new Headers({
//                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//              })
//          })).toPromise().then((res) => {
//              resolve(res.json());
//          })
//      })
//  }
}
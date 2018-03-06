import {Http, RequestMethod, RequestOptions, Headers, URLSearchParams} from '@angular/http';

//解决传参问题
import { Injectable } from '@angular/core';
@Injectable()

export class HttpService{
	constructor(private http: Http){}
	private baseUrl = 'http://10.3.132.91:3000/';

	// private baseUrl = 'http://10.3.132.88:3000/';



	private getUrl(_url){
	    if(_url.startsWith('http')){
	        return _url;
	    }
	    return this.baseUrl + _url;
	}

	get(api, params = {}){
		return new Promise((resolve, reject) => {
			//添加随机数，每次请求的url问题，解决浏览器缓存问题
            params['_'] = Math.random();
            
            const ops = Object.assign({}, {params: params});
            this.http.get(this.getUrl(api), ops).toPromise().then( res => {
                resolve(res.json());
            })
        })
	}

	post(api, params = {}){
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
            this.http.post(this.getUrl(api), param, {headers: headers}).toPromise().then( res=> {
                resolve(res.json());
            })
        })
	}
}
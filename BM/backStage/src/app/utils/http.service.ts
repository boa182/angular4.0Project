import {Http, RequestOptions, RequestMethod} from '@angular/http'
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService{
    constructor(private http: Http){}

    private baseUrl:string = 'http://localhost:8080/';
    private getUrl(_url){
        if(_url.startsWith('http')){
            return _url;
        }
        return this.baseUrl + _url;
    }

    get(api, params = {}){
        return new Promise((resolve, reject) => {
            params['_'] = Math.random();
            this.http.get(this.getUrl(api), new RequestOptions({
                method: RequestMethod.Get,
                search: params
            })).toPromise().then((res) => {
                resolve(res.json());
            })
        })
    }

   
}
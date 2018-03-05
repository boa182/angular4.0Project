import {RequestMethod, RequestOptions} from '@angular/http';

let baseUrl = 'http://10.0.136.252:3000/';

function getUrl(_url){
    if(_url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get: (http, api, params = {}) => {
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
}
    /*
>>>>>>> c6be85f79a7211ab5aa2c9f33cd02a6ce759597f
    post: (http, api, params = {}) => {
        return new Promise((resolve, reject) => {
            // http.get(getUrl(api)).subscribe((res) => {
            //     resolve(res.json());
            // })
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
    
}*/
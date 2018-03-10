import {HttpService} from './http.service';
import { Injectable } from '@angular/core';
//写公共的函数
@Injectable()
export class GetUser {

    constructor(private http:HttpService){
    }

    getDetails(){
        var currentUser = sessionStorage.getItem('userName') ;

        return this.http.get('usertype',{user:currentUser})
        
    }
}
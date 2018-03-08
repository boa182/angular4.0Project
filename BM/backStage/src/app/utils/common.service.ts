import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class CommonService{
    lanType: string = 'en';
    publicDic: Object = {};
    userType:number;
    currentUser:string;
    userNickName:string;

    constructor(private http: Http,private httpservice:HttpService){
        http.get('http://10.3.132.75:3000/dictionary.txt').subscribe((dicRes) => {
            this.publicDic = dicRes.json();
        })
        this.currentUser = sessionStorage.getItem('userName');
        httpservice.get('http://10.3.132.75:3000/usertype',{user:this.currentUser}).then((UserRes)=>{
           console.log(UserRes,'user');
           this.userType=UserRes[0]['type'];
           this.userNickName=UserRes[0]['nickName'];
        })
    }
}
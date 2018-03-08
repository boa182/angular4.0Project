import { Component, OnInit} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {
    dataset: Array<any> = null;
    ids: number = null;//当前编辑的用户id
    users: string = null;//当前编辑的用户名
    user: string = null;//登录的用户名
    filterDataConfig: Object = {};
    username: string = '';
    password: string = '';
    usertype: string = 0;

    constructor(private httpservice:HttpService ,private router: Router){}
    ngOnInit() {
        this.user = sessionStorage.getItem('userName')
        this.httpservice.get('userControl.txt').then((configRes)=>{
            this.filterDataConfig = configRes['filterData'] || {};
            console.log(this.filterDataConfig)
            this.httpservice.get(configRes.api).then((res) => {
                this.dataset = res;
                console.log(this.dataset,this.user)
            })
        })
        
    }
    /*filterData(_key, _val){
        let _config = this.filterDataConfig[_key];
        if(!_config){
            return _val;
        }else if(_config.type == "password"){
            console.log(666)
            let reg = new RegExp(_config.reg);
            return _val.replace(reg, _config.replaceVal);
        }
    }*/
    getkeys(item){
        return Object.keys(item)
    }
    deleteUser(id){
        let pageParams = {};
        pageParams['page'] = id;
        pageParams['user'] = this.user;
        this.httpservice.get('usertype',pageParams).then((res) => {
            if(res[0].type == 0 || res[0].type == ''){
                return alert('您当前没有操作权限')
            }else if(res[0].type == 1){
                for(let i=0;i<this.dataset.length;i++){
                    if(this.dataset[i].userid == id){
                        this.dataset.splice(i,1)
                    }
                }
                
                this.httpservice.get('updateuser',pageParams).then((res) => {
                    
                })
            }
        })
    }
    redact(_id,_user){
        this.ids = _id;
        this.users = _user;
        console.log(this.users,this.user,this.ids)
        let pageParams = {};
        pageParams['user'] = this.user;
        this.httpservice.get('usertype',pageParams).then((res) => {
            $('.modal-backdrop').css({
                display:'none'
            })
            if(res[0].type != 1 ){
                $('.myModals').css({
                    display:'none'
                })
                return alert('您当前没有操作权限')
            }
        })
    }
    updateUser(){
        let pageParams = {};
        pageParams['userid'] = this.ids;
        pageParams['username'] = this.username;
        pageParams['password'] = this.password;
        pageParams['usertype'] = this.usertype || 0;
        console.log(this.dataset,this.ids,pageParams)
        for(let i=0;i<this.dataset.length;i++){
            if(this.dataset[i].userid ==  this.ids){
                this.dataset[i].username = this.username;
                this.dataset[i].password = this.password;
                this.dataset[i].type = this.usertype || 0;
                this.httpservice.post('usercontrol',pageParams).then((res) => {
                    console.log(res)
                })
            }

        }
        
        
    }

}

import { Component, OnInit} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {Utils} from '../../utils/utils';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {
    dataset: Array<any> = [];
    ids: number = null;//当前编辑的用户id
    users: string = null;//当前编辑的用户名
    user: string = null;//登录的用户名
    filterDataConfig: Object = {};
    apiConfig: string;
    paginationConfig: Object;
    pageCount: number = 0;
    username: string = '';
    password: string = '';
    usertype: string = 0;
    lastPage:number;
    firstPage:number=1;
    pageNum:number = 5;
    page :number= 1 ;//当前页

    constructor(private httpservice:HttpService ,private router: Router){}
    ngOnInit() {
        this.user = sessionStorage.getItem('userName')
        this.httpservice.get('userControl.txt').then((configRes)=>{
            this.filterDataConfig = configRes['filterData'] || {};

            this.apiConfig = configRes['api'];

            this.paginationConfig = configRes['pagination'] || {};

            this.paginationConfig = configRes['pagination'] || {};
            this.apiRequest();
        })
        
        
    }

    apiRequest(_page = 1){
        let pageParams = {};
        if(this.paginationConfig){
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] = _page;
        }
        this.httpservice.get(this.apiConfig, pageParams).then((apiRes) => {
            this.dataset = apiRes[0];
            let rowsCount = apiRes[1][0]['rowscount'];
            let pageItems = this.paginationConfig['pageitems'];
            this.pageCount = Math.ceil(rowsCount / pageItems);
            if(_page==1){
                this.sub(1);
            }
        })
    }

    /*-----------------------分页--------------------*/
    setPage( num, first) {//创建保存页码数组的函数
     //length数据总条数
     //amount每页数据条数
     //num保留的页码数
     //first第一页的页码
     let pages = []; //创建分页数组
     let page = this.pageCount;
     
    if (page <= num) {
       for (let i = 1; i <= page; i++) {
         pages.push(i);
       }
     }
     if (page > num) {
       for (let i = first; i < first + num; i++) {
         pages.push(i);
       }
     }
     return pages;
    }

    sub(page){
        this.lastPage = this.pageCount;
         if (page >= this.pageNum) {
           this.firstPage = page - Math.floor(this.pageNum / 2);
         } else {
           this.firstPage = 1;
         }
         if (this.firstPage > this.lastPage - this.pageNum) {
           this.firstPage = this.lastPage - this.pageNum + 1;
         }
         this.pages = this.setPage( this.pageNum, this.firstPage);
         this.page = page;
   }
    filterData(_key, _val){
        let _config = this.filterDataConfig[_key];
        if(!_config){
            return _val;
        } else if(_config.type == "DateFormat"){
            return Utils.dateFormat(new Date(_val), _config.format); 
        } else if(_config.type == "Replace"){
            let reg = new RegExp(_config.reg);
            return _val.replace(reg, _config.replaceVal);
        }
    }

    goto(_page){
        //let _page = event.target.value;
        this.apiRequest(_page);
    }

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
        let pageParams = {};
        pageParams['user'] = this.user;
        this.httpservice.get('usertype',pageParams).then((res) => {
            $('.modal-backdrop').hide()
            if(res[0].type != 1 ){
                $('.myModals').hide()
                return alert('您当前没有操作权限')
            }
        })
    }
    updateUser(){
        let pageParams = {};
        pageParams['userid'] = this.ids;
        if(this.username == '' || this.password == ''){
            return alert('用户名或者密码为空')
        }
        pageParams['username'] = this.username ;
        pageParams['password'] = this.password;
        pageParams['usertype'] = this.usertype || 0;
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

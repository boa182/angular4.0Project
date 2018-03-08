import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import * as $ from 'jquery';

@Component({
selector: 'app-pinpai',
templateUrl: './pinpai.component.html',
styleUrls: ['./pinpai.component.scss']
})
export class PinpaiComponent implements OnInit {

    constructor(private http: HttpService,private common:CommonService,private router:Router ) {}


  ngOnInit() {
  }

  toBrandList(e){
    if(e.target.tagName=="IMG"){
      this.common.type='';
      this.common.brandStoreName = e.target.title;
      this.router.navigate(['/brand']);

    }
  }

  toBrandListZ(e){
    if(e.target.tagName=="LI"){
      this.common.type='';
      this.common.brandStoreName = e.target.lastElementChild.innerText;
      this.router.navigate(['/brand']);
    }    
    if(e.target.tagName=="IMG"){
      this.common.type='';
      this.common.brandStoreName = e.target.nextElementSibling.innerText;
      this.router.navigate(['/brand']);
    }    
    if(e.target.tagName=="SPAN"){
      this.common.type='';
      this.common.brandStoreName = e.target.innerText;
      this.router.navigate(['/brand']);
    }  
  }




  Adataset:Array<any>=[
      {img:'./../../../assets/images/l7.jpg',name:'丽得姿'},
      {img:'./../../../assets/images/l8.jpg',name:'发朵'},
      {img:'../../../assets/images/l9.jpg',name:'欧莱雅'},
      {img:'../../../assets/images/l10.jpg',name:'纤丝鸟'},
      {img:'../../../assets/images/l2.jpg',name:'伊丽莎白.长耳熊'}，
      {img:'../../../assets/images/l3.jpg',name:'美洲野牛'}，
      {img:'../../../assets/images/l4.jpg',name:'LEADERS INSOLUTION'}，
      {img:'../../../assets/images/l5.jpg',name:'玛吉卡'}，
  ]

  Bdataset:Array<any>=[
      {img:'../../../assets/images/l7.jpg',name:'皮尔·卡丹'},
      {img:'../../../assets/images/l8.jpg',name:'Nuxe'},
      {img:'../../../assets/images/l9.jpg',name:'骆驼'},
      {img:'../../../assets/images/l10.jpg',name:'五羊'},
      {img:'../../../assets/images/l2.jpg',name:'ELASTINE'}，
      {img:'../../../assets/images/l3.jpg',name:'LG'}，
  ]

  Cdataset:Array<any>=[
      {img:'../../../assets/images/l7.jpg',name:'奢步士'},
      {img:'../../../assets/images/l8.jpg',name:'YZC'},
      {img:'../../../assets/images/l9.jpg',name:'物生物'},
      {img:'../../../assets/images/l10.jpg',name:'Tangle Teezer'},
  ]

  Ddataset:Array<any>=[
      {img:'../../../assets/images/l7.jpg',name:'森田药妆'},
      {img:'../../../assets/images/l8.jpg',name:'THE SAEM'},
      {img:'../../../assets/images/l9.jpg',name:'皮尔·卡丹'},
      {img:'../../../assets/images/l10.jpg',name:'婵真'},
      {img:'../../../assets/images/l2.jpg',name:'丽得姿'}，
  ]

  Edataset:Array<any>=[
      {img:'../../../assets/images/l7.jpg',name:'伊加'},
      {img:'../../../assets/images/l8.jpg',name:'迪赛尼斯'},
      {img:'../../../assets/images/l9.jpg',name:'红色小象'},
      {img:'../../../assets/images/l10.jpg',name:'Tangle Teezer'},
  ]

  Fdataset:Array<any>=[
      {img:'../../../assets/images/l7.jpg',name:'艾欧唯'},
      {img:'../../../assets/images/l8.jpg',name:'福海堂'},
      {img:'../../../assets/images/l9.jpg',name:'too cool for school'},
  ]
}

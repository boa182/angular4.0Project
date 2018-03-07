import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {
    
    constructor(private http: HttpService,private common:CommonService,private router:Router ) {}

    ngOnInit() {

    }
    selectType(e){
        this.common.type = e.target.innerText;
    }
    toList(e){
        if(e.target.tagName=="P"){
            this.common.type = e.target.innerText;
            this.router.navigate(['/goodslist']);
            console.log(e.target.innerText)
        }
        if(e.target.tagName=="IMG"){
            console.log(e.target.parentNode);
            this.common.brandStoreName='';
            this.common.type = e.target.title;
            this.router.navigate(['/goodslist']);
        }
    }
    xsdataset: Array<any>=[
        {img:'../../../assets/images/l1.jpg',name:'洁面',title:'洁面'},
        {img:'../../../assets/images/l2.jpg',name:'香氛',title:'香氛'},
        {img:'../../../assets/images/l3.jpg',name:'卸妆',title:'卸妆'},
        {img:'../../../assets/images/l4.jpg',name:'美白',title:'美白'},
        {img:'../../../assets/images/l5.jpg',name:'套装',title:'套装'}
    ]
    hldataset: Array<any>=[
        {img:'../../../assets/images/l1.jpg',name:'面膜',title:'面膜'},
        {img:'../../../assets/images/l2.jpg',name:'洗浴',title:'洗浴'},
        {img:'../../../assets/images/l3.jpg',name:'围巾',title:'围巾'},
        {img:'../../../assets/images/l4.jpg',name:'洗护',title:'洗护'},
        {img:'../../../assets/images/l5.jpg',name:'保湿',title:'保湿'},
        {img:'../../../assets/images/l6.jpg',name:'床上用品',title:'床上用品'},
        {img:'../../../assets/images/l7.jpg',name:'防晒',title:'防晒'},
    ]
    czdataset:Array<any>=[
        {img:'../../../assets/images/l1.jpg',name:'防晒',title:'防晒'},
        {img:'../../../assets/images/l2.jpg',name:'彩妆',title:'彩妆'},
        {img:'../../../assets/images/l3.jpg',name:'洁面',title:'洁面'},
        {img:'../../../assets/images/l4.jpg',name:'香氛',title:'香氛'},
        {img:'../../../assets/images/l5.jpg',name:'卸妆',title:'卸妆'},
        {img:'../../../assets/images/l6.jpg',name:'美白',title:'美白'},
        {img:'../../../assets/images/l7.jpg',name:'套装',title:'套装'},
        {img:'../../../assets/images/l8.jpg',name:'服饰',title:'服饰'},
        {img:'../../../assets/images/l9.jpg',name:'旅游',title:'旅游'},
    ]
    mandataset:Array<any>=[
        {img:'../../../assets/images/l1.jpg',name:'服饰',title:'服饰'},
        {img:'../../../assets/images/l2.jpg',name:'旅游',title:'旅游'},
        {img:'../../../assets/images/l3.jpg',name:'面膜',title:'面膜'},
        {img:'../../../assets/images/l4.jpg',name:'洗浴',title:'洗浴'},
        {img:'../../../assets/images/l5.jpg',name:'围巾',title:'围巾'},
        {img:'../../../assets/images/l6.jpg',name:'洗护',title:'洗护'},
    ]
    facedataset:Array<any>=[
        {img:'../../../assets/images/l1.jpg',name:'服饰',title:'服饰'},
        {img:'../../../assets/images/l2.jpg',name:'旅游',title:'旅游'},
        {img:'../../../assets/images/l3.jpg',name:'面膜',title:'面膜'},
        {img:'../../../assets/images/l4.jpg',name:'洗浴',title:'洗浴'},
        {img:'../../../assets/images/l5.jpg',name:'围巾',title:'围巾'},
        {img:'../../../assets/images/l6.jpg',name:'洗护',title:'洗护'},
        {img:'../../../assets/images/l7.jpg',name:'保湿',title:'保湿'},
        {img:'../../../assets/images/l8.jpg',name:'床上用品',title:'床上用品'},
        {img:'../../../assets/images/l9.jpg',name:'防晒',title:'防晒'},
        {img:'../../../assets/images/l10.jpg',name:'彩妆',title:'彩妆'},
        {img:'../../../assets/images/l11.jpg',name:'洁面',title:'洁面'},
        {img:'../../../assets/images/l12.jpg',name:'香氛',title:'香氛'},
        {img:'../../../assets/images/l13.jpg',name:'卸妆',title:'卸妆'},
        {img:'../../../assets/images/l14.jpg',name:'美白',title:'美白'},
        {img:'../../../assets/images/l15.jpg',name:'套装',title:'套装'},
        {img:'../../../assets/images/l16.jpg',name:'美白',title:'美白'},
    ]

}



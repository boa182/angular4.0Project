import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import * as $ from 'jquery';

@Component({
	selector: 'app-shopping',
	templateUrl: './shopping.component.html',
	styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
	
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
		}
		if(e.target.tagName=="IMG"){
			
				this.common.type = e.target.title;
				this.router.navigate(['/goodslist']);
			
		}
	}
	getScroll(){
	    if($('.contain').scrollTop() < 1000){
	      $('.typeNav').removeAttr("style")
	    }else{
	      $('.typeNav').css({'position':'fixed','top':44,'z-index':'2','width':'100%'})
	    }
  	}
}
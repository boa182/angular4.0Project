import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';

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
	}

}
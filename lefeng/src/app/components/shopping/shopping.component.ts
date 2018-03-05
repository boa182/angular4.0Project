import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';

@Component({
	selector: 'app-shopping',
	templateUrl: './shopping.component.html',
	styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
	zclassify: String = "面膜";
	goodslist: Array = [];
	constructor(private http: HttpService) {}

	ngOnInit() {
		this.http.get('selectClass', {
			type: this.zclassify;
		}).then((res) => {
			this.goodslist = res;
			
		})	
	}
	selectType(e) {
		//	console.log(e.target.innerText)
		this.zclassify = e.target.innerText;
		this.http.get('selectClass', {
			type: this.zclassify;
		}).then((res) => {
				this.goodslist = res;
				console.log(this.goodslist)
		})
	}
}
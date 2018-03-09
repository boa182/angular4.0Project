import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	Data:Array<any>

  constructor(private http: HttpService,private location: Location) { }

	ngOnInit() {
		// var cartList = JSON.parse(sessionStorage.getItem('orderlist'))
		// this.Data = cartList;
		var order = JSON.stringify(sessionStorage.getItem('orderlist')) ;
		console.log(order)
		var uid = sessionStorage.getItem('uid')
		
		
		if(order == '' || order == null){
			this.http.get('getorderlist',{uid:uid}).then((res)=>{
				var Res = JSON.parse(JSON.stringify(res))
				// this.Data = Res
				// console.log(Res[0].order_detail)
			})
		}else{
			this.http.get('setorderlist',{uid:uid,order_detail:order}).then((res)=>{
				sessionStorage.removeItem('orderlist')
				var Data = this.Data
				this.http.get('getorderlist',{uid:uid}).then((res)=>{
					var Res = JSON.parse(JSON.stringify(res))
					Data = Res
				})
			})
		}
		
	}
	goBack(){
		this.location.back();
	}
}

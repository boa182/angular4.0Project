import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	Data1:Array<Object>
	Data2:Array<Object>
	Data3:Array<Object>
	Data4:Array<Object>
	Status:Array<string> = ['待付款','待收货','待评价'];

  constructor(private http: HttpService,private location: Location ,private router: Router) { }

	ngOnInit() {
		var uid = sessionStorage.getItem('uid')
		this.http.get('getgoodsorder',{uid:uid}).then((res)=>{
			console.log(res)
			var Res = JSON.parse(JSON.stringify(res))
			this.Data1 = Res
		})
	}

	unpay(){
		var uid = sessionStorage.getItem('uid')
		this.http.get('selectgoods_fromType',{uid:uid,type:1}).then((res)=>{
			var Res = JSON.parse(JSON.stringify(res))
			this.Data2 = Res
		})
	}
	unsend(){
		var uid = sessionStorage.getItem('uid')
		this.http.get('selectgoods_fromType',{uid:uid,type:2}).then((res)=>{
			var Res = JSON.parse(JSON.stringify(res))
			this.Data3 = Res
		})
	}
	uncommon(){
		var uid = sessionStorage.getItem('uid')
		this.http.get('selectgoods_fromType',{uid:uid,type:3}).then((res)=>{
			var Res = JSON.parse(JSON.stringify(res))
			this.Data4 = Res
		})
	}
	goBack(){
		this.location.back();
	}
	toDetail(){
		this.router.navigateByUrl("orderform") 
	}
}



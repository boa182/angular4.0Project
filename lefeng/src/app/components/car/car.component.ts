import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import { NgStyle } from '@angular/common';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
	style:Object ={'display': 'none'};
	navstyle:Object = {'display': 'block'};
	Res:Array<any>=[];
	carRes:Array<any>=[];
	QtyRes:Array<any>=[];
	qtyArr:Array<any>=[];
	count:any = null;
	uid:any = "0";
  constructor(private http: HttpService,private common:CommonService,private router:Router) { }

  ngOnInit() {
  	this.uid = sessionStorage.getItem("uid");
  	console.log(this.uid);
  	if(this.uid==0){
  		this.style ={'display': 'block'};
  		this.navstyle={'display': 'none'}
  	}
	this.createList();
  }
  addQty(gid){

	this.http.post('updateqty',{
		uid:this.uid,
			gid:gid,
	}).then((res)=>{
		this.count = 0;
		this.createList()
	})

  }
	del(gid){
		console.log(gid)
		this.http.get('deletegoods',{
			uid:this.uid,
			gid:gid
		}).then((res)=>{
			this.count = 0;
	  	this.createList()
	  	$("#success").show().animate({width: '250px'}, 200).fadeOut(1000);
		})
	}
	reduceQty(gid,qty){
		
		if(qty>1){
			
			this.http.post('reduceqty',{
	  		uid:this.uid,
				gid:gid,
	  	}).then((res)=>{
	  		this.count = 0;
	  		this.createList()
	  	})
			
		}
	}
	account(){
		console.log(this.carRes)
		
		var a = JSON.stringify(this.carRes);
		sessionStorage.setItem("orderlist",a);
		console.log(sessionStorage.getItem("orderlist"));


//		this.http.get('createOrder',{
//			uid:this.uid
//		}).then((res)=>{
//			console.log(res);
			this.router.navigate(['/order']);
//		})
//		console.log('order')
	}
	createList(){
		
	this.http.get('selectqty',{
		uid:this.uid
	}).then((qtyres)=>{
		let QtyRes = JSON.parse(JSON.stringify(qtyres));
		this.qtyArr = QtyRes;
		this.http.get('connetGoods',{
			uid:this.uid
		}).then((res)=>{
			let Res = JSON.parse(JSON.stringify(res));
			this.carRes = Res;
			for(var i = 0;i<this.carRes.length;i++){
				if(this.carRes[i].gid==this.qtyArr[i].gid){
					this.carRes[i].qty = this.qtyArr[i].qty;
					this.count += this.carRes[i].qty*this.carRes[i].vipshopPrice;
					
				}
			}
		})
		
	})

		}
}

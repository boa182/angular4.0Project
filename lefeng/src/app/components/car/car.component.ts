import { Component, OnInit } from '@angular/core';

//依赖组件模块引用
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
	style:Object ={'display': 'none'};
	Res:Array<any>=[];
	carRes:Array<any>=[];
	QtyRes:Array<any>=[];
	qtyArr:Array<any>=[];
	count:any = null;
  constructor(private http: HttpService,private common:CommonService) { }

  ngOnInit() {
  	this.createList();
  }
  addQty(gid){
  	
  	this.http.post('updateqty',{
  		uid:0,
			gid:gid,
  	}).then((res)=>{
  		this.count = 0;
  		this.createList()
  	})
  	
  }
	del(){
		console.log("del")
	}
	reduceQty(gid,qty){
		if(qty>1){
			
			this.http.post('reduceqty',{
	  		uid:0,
				gid:gid,
	  	}).then((res)=>{
	  		this.count = 0;
	  		this.createList()
	  	})
			
		}
	}
	createList(){
		
  	this.http.get('selectqty',{
  		uid:0
  	}).then((qtyres)=>{
  		let QtyRes = JSON.parse(JSON.stringify(qtyres));
  		this.qtyArr = QtyRes;
  		this.http.get('connetGoods',{
  			uid:0
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
